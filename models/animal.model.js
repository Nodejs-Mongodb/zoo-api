import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: String,
  description: String,
  color: String,
  race: String,
  age: Number,
  free: Boolean,
});

export default mongoose.model("Animal", schema);
