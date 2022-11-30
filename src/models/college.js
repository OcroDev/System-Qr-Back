import mongoose from "mongoose";

const collegeSchema = mongoose.Schema(
  {
    co_description: { type: String, require: true },
    isDeleted: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

const COLLEGE = mongoose.model("College", collegeSchema);

export default COLLEGE;
