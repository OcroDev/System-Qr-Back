import sequelize from "../database/index.js";
import DataTypes from "sequelize";
import MOVEMENT from "./movements.js";

const OPERATION = sequelize.define(
  "operations",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    operation_auth: {
      type: DataTypes.STRING,
      defaultValue: "LIC. GABRIELA CEDOLIN",
    },
    isdeleted: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    timestamps: true,
  }
);

OPERATION.hasMany(MOVEMENT, {
  foreignKey: "operation_cod",
  sourceKey: "id",
});

MOVEMENT.belongsTo(OPERATION, {
  foreignKey: "operation_cod",
});

export default OPERATION;
