import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";
import OPERATION from "./operation.js";

const USER = sequelize.define(
  "users",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    u_firstname: { type: DataTypes.STRING, allowNull: false },
    u_lastname: { type: DataTypes.STRING, allowNull: true, defaultValue: "" },
    u_username: { type: DataTypes.STRING, unique: true, allowNull: false },
    u_password: { type: DataTypes.STRING, allowNull: false },
    u_admin: { type: DataTypes.BOOLEAN, defaultValue: false },
    isdeleted: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    timestamps: true,
  }
);

USER.hasMany(OPERATION, {
  foreignKey: "u_make",
  sourceKey: "id",
});

OPERATION.belongsTo(USER, {
  foreignKey: "u_make",
});

export default USER;

// // import mongoose from "mongoose";

// // const userSchema = mongoose.Schema(
// //   {
// //     u_fullname: { type: String, require: true },
// //     u_username: { type: String, require: true },
// //     u_password: { type: String, require: true },
// //     u_admin: { type: Boolean, default: false },
// //     isDeleted: { type: Date, default: null },
// //   },
// //   {
// //     timestamps: true,
// //   }
// // );

// // const USER = mongoose.model("User", userSchema);

// // export default USER;
