import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    p_description: { type: String, require: true },
    isDeleted: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);
