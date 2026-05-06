import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://novagoods-store.vercel.app',
    process.env.FRONTEND_URL
  ].filter(Boolean) 
}));

app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Nova Goods Server running on port ${PORT}`);
});