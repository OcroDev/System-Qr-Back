import express from "express";
import Cors from "cors";
import databaseConnetion from "./database/index.js";
import collegesRouter from "./routes/collegeRoutes.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";

const app = express();

//database connection
databaseConnetion(app);

app.use(Cors());

app.use(express.json());

//products
app.use("/qrstock/api/products", productRouter);

//colleges
app.use("/qrstock/api/colleges", collegesRouter);

//users
app.use("/qrstock/api/users", userRouter);
