import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  carName: { type: String, required: true },
  brand: String,
  model: String,
  year: Number,
  category: String,
  description: String,
  image: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

export default mongoose.model("Car", carSchema);
