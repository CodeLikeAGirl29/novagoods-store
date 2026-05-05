import { pool } from '../config/db.js';

export const getProducts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY created_at DESC');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    if (result.rows.length === 0) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error: error.message });
  }
};