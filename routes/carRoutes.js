import express from "express";
import { getCars, addCar, updateCar, deleteCar } from "../controllers/carController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getCars);
router.post("/", authMiddleware, addCar);
router.put("/:id", authMiddleware, updateCar);
router.delete("/:id", authMiddleware, deleteCar);

export default router;
