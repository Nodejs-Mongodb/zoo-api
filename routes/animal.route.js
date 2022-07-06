import express from "express";
import {
  addNewAnimal,
  getAll,
  getAllFree,
  getById,
} from "../controllers/animal.controller.js";

const router = express.Router();

router.get("/animals", getAll);

router.get("/animals/:id", getById);

router.get("/free-animals", getAllFree);

router.post("/new-animal", addNewAnimal);

export const animalRouter = router;
