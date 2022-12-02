import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    p_description: { type: String, require: true },
    p_stock: { type: Number, default: 0 },
    p_MinStock: { type: Number, default: 0 },
    p_price: { type: Number, default: 0 },
    p_measurementUnit: { type: String, default: "" },
    p_location: { type: String, required: true },
    isDeleted: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

const PRODUCT = mongoose.model("Product", productSchema);

export default PRODUCT;
