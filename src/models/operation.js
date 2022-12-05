import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";

const OPERATION = sequelize.define(
  "operations",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  },
  {
    timestamps: true,
  }
);

export default OPERATION;
