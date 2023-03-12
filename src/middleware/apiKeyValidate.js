import apiKey from "../models/apiKey.js";
import {responseNotData} from "../services/responseService.js";

const apiKeyValidate = async (req, res, next) => {
    if(typeof req.headers.authorized != 'undefined') {
        let apiKeyReq = req.headers.authorized;
        try {
            const result = await apiKey.findOne({
                where: {
                    apiKey: apiKeyReq
                }
            });

            const countApiKey = await apiKey.update({
                'countHit' : result.countHit + 1,
            }, {
                where: {
                    id: result.id,
                }
            });

            if(result != null) {
                return next();
            }else{
                responseNotData(res, false, 'API KEY is not available', 400);
            }
        } catch (err) {
            responseNotData(res, false, 'API KEY is not available', 400);
        }
    }else{
        responseNotData(res, false, 'API KEY is not available', 400);
    }

    return next();
}

export default apiKeyValidate;