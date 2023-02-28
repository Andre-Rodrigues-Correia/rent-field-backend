import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './router';
import 'express-async-errors'

dotenv.config(); //config dotenv

const app = express(); //create express app
app.use(express.json(),
    cors(),
    router);

export default app;