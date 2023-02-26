import express from "express";
import login from "../controllers/jwtController.js";
import { create } from "../controllers/apiKeyController.js";

const authRoute = express.Router();

authRoute.get('/login', login);
authRoute.post('/create-api-key', create);
export default authRoute;