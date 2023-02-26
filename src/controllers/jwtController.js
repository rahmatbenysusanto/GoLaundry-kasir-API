import jwt from "jsonwebtoken";
import fs from "fs";
import bcrypt from "bcrypt";
import user from '../models/user.js';
import {responseWithData, responseNotData} from '../services/responseService.js';

const login = async (req, res) => {
    const password = req.body.password;

    let dataUser = await user.findOne({
        where: {
            email: req.body.email,
        }
    });

    bcrypt.compare(password, dataUser.password, (err, result) => {
        if(result === true) {
            let body = {
                'name' : dataUser.name,
                'email' : dataUser.email
            };
            let privateKey = fs.readFileSync('./private.pem', 'utf8');
            let token = jwt.sign({ "body": body }, privateKey, { algorithm: 'RS256'});

            let data = {
                'token': token,
                'user' : body
            };
            responseWithData(res, true, 'Login Successfully', data, 200);
        }else{
            responseNotData(res, false, 'Login Failed', 400);
        }
    });
}

export default login;