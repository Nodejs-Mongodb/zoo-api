import mongoose from "mongoose";
import Animal from "./animal.model.js";

const schema = mongoose.Schema({
  name: String,
  limit: Number,
  animals: Array,
});

export default mongoose.model("Enclosure", schema);
