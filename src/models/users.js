import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    u_fulltname: { type: String, require: true },
    u_username: { type: String, require: true },
    u_password: { type: String, require: true },
    u_admin: { type: Boolean, default: false },
    u_normal: { type: Boolean, default: true },
    isDeleted: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

const USER = mongoose.model("User", userSchema);

export default USER;
