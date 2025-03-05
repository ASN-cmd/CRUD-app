import express from 'express';
import userController from '../controllers/user.js';

const router = express.Router();

// All routes are here

router.get("/users", userController.getAllUsers);

export default router;