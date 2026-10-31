import express from "express";
import { getCollections, addCollection, updateCollection, deleteCollection } from "../controllers/collectionController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getCollections);
router.post("/", authMiddleware, addCollection);
router.put("/:id", authMiddleware, updateCollection);
router.delete("/:id", authMiddleware, deleteCollection);

export default router;
