import express from "express";
import {
  addNewAnimal,
  editAnimal,
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

router.patch("/edit-animal/:id", editAnimal);

export const animalRouter = router;
