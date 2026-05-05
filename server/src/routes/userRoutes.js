import express from 'express';
import { register, login } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Example of a protected route
router.get('/profile', protect, (req, res) => {
  res.json({ message: `Welcome User ${req.user.id}` });
});

export default router;