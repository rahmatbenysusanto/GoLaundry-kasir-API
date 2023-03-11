import express from "express";
import {createOrder, findById, getOrder, updateStatusOrder} from "../controllers/orderController.js";

const orderRoute = express.Router();

orderRoute.post('/order-create', createOrder);
orderRoute.get('/orders', getOrder);
orderRoute.get('/order/:id', findById);
orderRoute.patch('/order/:id', updateStatusOrder);

export default orderRoute;