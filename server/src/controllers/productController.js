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
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id) // Ensure this column name matches your Supabase table
      .single();

    if (error || !data) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};