import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import path from 'path';
import productRouter from './route/product.route.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const __dirname = path.resolve();



app.use('/api/product', productRouter);




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running at http://localhost:${PORT}`);
});

export default app;