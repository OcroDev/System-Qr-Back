import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";
import OPERATION from "./operation.js";

const OFFICE = sequelize.define(
  "office",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    of_description: {
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

OFFICE.hasMany(OPERATION, {
  foreignKey: "of_out",
  sourceKey: "id",
});

OPERATION.belongsTo(OFFICE, {
  foreignKey: "of_out",
});

export default OFFICE;

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
