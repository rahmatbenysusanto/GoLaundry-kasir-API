import order from '../models/order.js';
import orderDetail from "../models/orderDetail.js";
import orderHistory from "../models/orderHistory.js";
import {responseNotData} from "../services/responseService.js";

export const createOrder = async (req, res) => {
    try {
        const createOrder = await order.create({
            client_id: req.body.client_id,
            user_id: req.body.user_id,
            price: req.body.price,
            status: 'new'
        });
        responseNotData(res, true, 'Create Order Successfully', 201);
    } catch (err) {
        responseNotData(res, false, err.message, 400);
    }
}
