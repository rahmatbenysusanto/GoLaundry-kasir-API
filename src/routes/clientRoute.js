import express from "express";
import {createClient, getClient} from "../controllers/clientController.js";

const routeClient = express.Router();

routeClient.get('/clients', getClient);
routeClient.post('/client', createClient);
export default routeClient;