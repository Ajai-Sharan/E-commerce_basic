import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import productRouter from './route/product.route.js';

dotenv.config();

const app = express();

const allowedOrigins = ['https://e-commerce-basic-gules.vercel.app'];
app.use(cors({
    origin: allowedOrigins,
    credentials: true, // If you need to send cookies or authentication headers
}));

app.use(express.json());


app.use('/api/product', productRouter);

connectDB();

export default app;