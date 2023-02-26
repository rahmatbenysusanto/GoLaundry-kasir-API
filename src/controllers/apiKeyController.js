import apiKey from '../models/apiKey.js';
import {responseNotData} from "../services/responseService.js";

export const create = async (req, res) => {
    try {
        const result = await apiKey.create(req.body);
        responseNotData(res, true, 'Create API KEY successfully', 201);
    } catch (err) {
        responseNotData(res, false, err.message, 400);
    }
}