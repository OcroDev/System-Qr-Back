import express from "express";
import Cors from "cors";
import databaseConnetion from "./database/index.js";
import collegesRouter from "./routes/collegeRoutes.js";

const app = express();

//TODO: database connection
databaseConnetion(app);

app.use(Cors());

app.use(express.json());

// app.use("/qrstock/api/products");
// app.use("/qrstock/api/users");
app.use("/qrstock/api/colleges", collegesRouter);
