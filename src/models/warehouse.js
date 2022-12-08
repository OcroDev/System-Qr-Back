import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";
import OPERATION from "./operation.js";

const WAREHOUSE = sequelize.define(
  "warehouse",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    w_description: {
      type: DataTypes.STRING,
    },
    isdeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
  }
);

WAREHOUSE.hasMany(OPERATION, {
  foreignKey: "warehouse_out",
  sourceKey: "id",
});

OPERATION.belongsTo(WAREHOUSE, {
  foreignKey: "warehouse_out",
});

export default WAREHOUSE;

// // import mongoose from "mongoose";

// // const collegeSchema = mongoose.Schema(
// //   {
// //     co_description: { type: String, require: true },
// //     isDeleted: { type: Date, default: null },
// //   },
// //   {
// //     timestamps: true,
// //   }
// // );

// // const COLLEGE = mongoose.model("College", collegeSchema);

// // export default COLLEGE;
