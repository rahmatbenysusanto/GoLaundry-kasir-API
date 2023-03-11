import express from "express";
import {createOrder, findById, getOrder} from "../controllers/orderController.js";

const orderRoute = express.Router();

orderRoute.post('/order-create', createOrder);
orderRoute.get('/orders', getOrder);
orderRoute.get('/order/:id', findById);

export default orderRoute;