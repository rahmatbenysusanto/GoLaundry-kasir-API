import express from "express";
import {createUser, deleteUser, findById, getUser, updateUser} from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.get('/users', getUser);
userRoute.get('/user/:id', findById);
userRoute.post('/user', createUser);
userRoute.patch('/user/:id', updateUser);
userRoute.delete('/user/:id', deleteUser);

export default userRoute;