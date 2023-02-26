import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import route from './src/routes/route.js';
import apiKeyValidate from "./src/middleware/apiKeyValidate.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(apiKeyValidate, route);

app.listen(process.env.APP_PORT, () => {
    console.log(`Server running on port ${process.env.APP_PORT}`);
});
