import express from "express";
import userRoute from "./userRoute.js";
import generateToken from "../controllers/jwtController.js";
import isAuthenticated from "../middleware/jwtValidate.js";
import layananRoute from "./layananRoute.js";
import {createUser} from "../controllers/userController.js";
import authRoute from "./authRoute.js";

const route = express.Router();

route.use(authRoute);
route.get('/register', createUser);
route.use(isAuthenticated ,userRoute);
route.use(isAuthenticated, layananRoute);

export default route;

