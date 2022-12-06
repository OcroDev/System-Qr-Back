import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";
import OPERATION from "./operation.js";

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

DEPARTMENT.hasMany(OPERATION, {
  foreignKey: "dep_in",
  sourceKey: "id",
});

OPERATION.belongsTo(DEPARTMENT, {
  foreignKey: "dep_in",
});

export default DEPARTMENT;
