// const express = require("express");
import express, { response } from "express";
// const mongoose = require("mongoose");
import mongoose from "mongoose";
import initDb from "./initDb.js";
import router from "./router.js";
import dotenv from "dotenv";
import { animalRouter } from "./routes/animal.route.js";
import { enclosureRouter } from "./routes/enclosure.route.js";

dotenv.config();

// settings http connection with express
const port = process.env.PORT;
const app = express();
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;

database.on("error", console.error.bind(console, "connection error"));
database.on("open", () => {
  console.log("Connected to MongoDB");
});

// rendering
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/init-db", (req, res) => {
  initDb(1);
});

app.use("/api", animalRouter);
app.use("/api", enclosureRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
