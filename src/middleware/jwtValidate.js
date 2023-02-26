import jwt from 'jsonwebtoken';
import * as fs from "fs";
function isAuthenticated(req, res, next) {
    if (typeof req.headers.authorization !== "undefined") {
        let token = req.headers.authorization;
        let publicKey = fs.readFileSync('./public.pem', 'utf8');
        jwt.verify(token, publicKey, { algorithm: "RS256" }, (err, user) => {
            if (err) {
                res.status(500).json({ error: "Not Authorized" });
                throw new Error("Not Authorized");
            }
            return next();
        });
    } else {
        res.status(500).json({ error: "Not Authorized" });
        throw new Error("Not Authorized");
    }
}

export default isAuthenticated;