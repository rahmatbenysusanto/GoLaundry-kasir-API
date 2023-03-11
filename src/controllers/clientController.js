import client from "../models/client.js";
import {responseNotData, responseWithData} from "../services/responseService.js";

export const createClient = async (req, res) => {
    try {
        const create = await client.create({
            name: req.body.name,
            noHp: req.body.noHp,
            user_id: req.body.user_id,
        });

        return responseWithData(res, true, 'Create Client Successfully', create, 201);
    } catch (err) {
        return responseNotData(res, false, 'Create Client Failed', 400);
    }
}

export const getClient = async (req, res) => {
    try {
        const result = await client.findAll({
            where: {
                user_id: req.body.user_id,
            }
        });

        return responseWithData(res, true, 'Get Client Successfully', result, 200);
    } catch (err) {
        return responseNotData(res, false, 'Get Client Failed', 400);
    }
}