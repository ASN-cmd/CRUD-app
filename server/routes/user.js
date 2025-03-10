import express from 'express';
import userController from '../controllers/user.js';

const router = express.Router();

// All routes are here

router.get("/users", userController.getAllUsers);
router.post("/users", userController.createUser);
router.get("/users/single/:id", userController.getSingleUser);
router.put("/users/:id", userController.updateuser);
router.delete("/users/:id", userController.deleteuser);

export default router;