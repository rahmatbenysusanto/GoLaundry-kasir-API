import order from '../models/order.js';
import orderDetail from "../models/orderDetail.js";
import orderHistory from "../models/orderHistory.js";
import {responseNotData} from "../services/responseService.js";
import {create} from "./apiKeyController.js";

export const createOrder = async (req, res) => {
    try {
        const createOrder = await order.create({
            client_id: req.body.client_id,
            user_id: req.body.user_id,
            price: req.body.price,
            status: 'new'
        });

        // Create Order Detail
        for(let a = 0; a < req.body.detail.length; a++) {
            await orderDetail.create({
                user_id: req.body.detail[a].user_id,
                client_id: req.body.detail[a].client_id,
                order_id: createOrder.id,
                layanan_id: req.body.detail[a].layanan_id,
                price: req.body.detail[a].price,
                count : req.body.detail[a].count
            });
        }

        // Create Order History
        await orderHistory.create({
            order_id : createOrder.id,
            title_history: 'Create Order',
            desc_history : 'Order berhasil dibuat'
        });
        responseNotData(res, true, 'Order Create Successfully', 201);
    } catch (err) {
        responseNotData(res, false, err.message, 400);
    }
}


