import express from 'express';
import { LoginPost, RegisterPost } from '../controllers/user-controller.js';
import { registerPostValidtor, LoginPostValidtor } from '../middlewares/auth-validator.js';
const router = express.Router();

router.post('/login', LoginPostValidtor, LoginPost);
router.post('/register', registerPostValidtor, RegisterPost);

export default router;
