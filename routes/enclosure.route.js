import express from "express";
import {
  addNewEnclosure,
  getAll,
  editEnclosure,
  getById,
} from "../controllers/enclosure.controller.js";

const router = express.Router();

router.get("/enclosures", getAll);

router.get("/enclosures/:id", getById);

router.post("/new-enclosure", addNewEnclosure);

router.patch("/edit-enclosure/:id", editEnclosure);

export const enclosureRouter = router;
