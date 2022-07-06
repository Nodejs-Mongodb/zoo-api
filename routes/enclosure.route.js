import express from "express";
import {
  addNewEnclosure,
  getAll,
} from "../controllers/enclosure.controller.js";

const router = express.Router();

router.get("/enclosures", getAll);

router.post("/new-enclosure", addNewEnclosure);

export const enclosureRouter = router;
