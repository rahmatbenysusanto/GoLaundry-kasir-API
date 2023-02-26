import express from "express";
import {getLayanan, findById, createLayanan} from "../controllers/layananController.js";

const layananRoute = express.Router();

layananRoute.get('/layanan', getLayanan);
layananRoute.get('/layanan/:id', findById);
layananRoute.post('/layanan', createLayanan);

export default layananRoute;