// const express = require("express");
import express, { response } from "express";
// const mongoose = require("mongoose");
import mongoose from "mongoose";
import initDb from "./initDb.js";
import dotenv from "dotenv";
import { animalRouter } from "./routes/animal.route.js";
import { enclosureRouter } from "./routes/enclosure.route.js";
import { authRouter } from "./routes/auth.router.js";

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
  try {
    initDb(50, 10);
    res.status(200).send("init db successfully");
  } catch (error) {
    res.status(error.code).send(error.message);
    console.log("Error: ", error);
  }
});

app.use("/", authRouter);
app.use("/api", animalRouter);
app.use("/api", enclosureRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
