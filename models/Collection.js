import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cars: [{ type: mongoose.Schema.Types.ObjectId, ref: "Car" }],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

export default mongoose.model("Collection", collectionSchema);
