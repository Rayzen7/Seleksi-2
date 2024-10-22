import { register, login, getAllUser } from "../Controllers/login.js";
import express from "express";

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/', getAllUser);

export default router;
