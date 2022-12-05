import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";

const MOVEMENT = sequelize.define();

export default MOVEMENT;

// // import mongoose from "mongoose";

// // const movementSchema = mongoose.Schema(
// //   {
// //     mov_cod: { type: String, required: true },
// //     p_id: { type: Array, required: true },
// //     mov_note: { type: String },
// //     mov_quantity: { type: Array, required: true },
// //     mov_type: { type: String, required: true },
// //     isDeleted: { type: Date, defalut: null },
// //   },
// //   {
// //     timestamps: true,
// //   }
// // );

// // const MOVEMENT = mongoose.model("Movement", movementSchema);

// // export default MOVEMENT;
