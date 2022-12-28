//dev dependencies
import Colors from "colors";
//production dependecies
import express from "express";
//import app from "./app.js";
import Cors from "cors";
import * as dotenv from "dotenv";
import sequelize from "./database/index.js";
import warehouseRouter from "./routes/warehouseRoutes.js";
import userRouter from "./routes/userRoutes.js";
import departmentRouter from "./routes/departmentRoutes.js";
import productRouter from "./routes/productRoutes.js";
import movementRouter from "./routes/movementRoutes.js";

import "./models/departments.js";
import "./models/movements.js";
import "./models/warehouse.js";
import "./models/operation.js";
import "./models/operationType.js";
import "./models/product.js";
import "./models/users.js";

const app = express();
app.use(Cors());

//ENVIROMENT CONSTANTS
dotenv.config();
const PORT = process.env.PORT || 5000;

//database connection
async function databaseConnetion() {
  try {
    await sequelize.sync({ alter: true });
    console.log(
      Colors.rainbow("Connection has been established successfully.")
    );
    app.listen(PORT, () => {
      console.log(Colors.rainbow(`SERVER PORT LISTENING ON PORT ${PORT}`));
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

databaseConnetion();

app.use(express.json());

//products
app.use("/qrstock/api/products", productRouter);

//product movements
app.use("/qrstock/api/movements", movementRouter);

//warehouse
app.use("/qrstock/api/warehouses", warehouseRouter);

//users
app.use("/qrstock/api/users", userRouter);

//departments
app.use("/qrstock/api/departments", departmentRouter);
