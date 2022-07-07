import express from "express";
import {
  addNewAnimal,
  getAll,
  getAllFree,
  getById,
} from "../controllers/animal.controller.js";
import { authenticateJWT } from "../middleware/auth.js";

const router = express.Router();

router.get("/animals", getAll);

router.get("/animals/:id", getById);

router.get("/free-animals", getAllFree);

router.post("/new-animal", authenticateJWT, addNewAnimal);

export const animalRouter = router;
