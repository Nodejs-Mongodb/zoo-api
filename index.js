// const express = require("express");
import express from "express";
// const mongoose = require("mongoose");
import mongoose from "mongoose";

// settings http connection with express
const port = 3000;
const app = express();

// Connection to database using orm mongoose
const mongodb =
  "mongodb+srv://Admin:Salatiga98@cluster0.0fxtpta.mongodb.net/test";

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });

const database = mongoose.connection;

database.on("error", console.error.bind(console, "connection error"));
database.on("open", () => {
  console.log("Connected to MongoDB");
});

// rendering
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
