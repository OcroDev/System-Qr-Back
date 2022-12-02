import mongoose from "mongoose";

const movementSchema = mongoose.Schema({
  mov_cod: { type: String, required: true },
  p_id: { type: Array, required: true },
  mov_note: { type: String },
  mov_quantity: { type: Array, required: true },
  mov_type: { type: String, required: true },
});

const MOVEMENT = mongoose.model("Movement", movementSchema);

export default MOVEMENT;
