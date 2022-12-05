//dev dependencies
import Colors from "colors";
//production dependecies
import express from "express";
import app from "./app.js";
import Cors from "cors";
import * as dotenv from "dotenv";
import sequelize from "./database/index.js";
import oficceRouter from "./routes/officeRoutes.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import movementRouter from "./routes/movementRoutes.js";
import "./models/office.js";
import "./models/users.js";
import "./models/product.js";

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

app.use(Cors());

app.use(express.json());

//products
app.use("/qrstock/api/products", productRouter);

//product movements
app.use("/qrstock/api/products/movements", movementRouter);

//colleges
app.use("/qrstock/api/offices", oficceRouter);

//users
app.use("/qrstock/api/users", userRouter);
