import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import productRouter from './route/product.route.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/product', productRouter);

connectDB();

export default app;