import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";

const DEPARTMENT = sequelize.define(
  "departments",
  {
    id: { type: DataTypes.INTEGER, autoInrement: true, primaryKey: true },
    d_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
  },
  {
    timestamps: true,
  }
);
