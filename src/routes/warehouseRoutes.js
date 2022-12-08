import { Router } from "express";
import warehouseController from "../controllers/warehouseController.js";

const warehouseRouter = Router();

//POST .../qrstock/api/colleges
warehouseRouter.post("/", warehouseController.store);

export default warehouseRouter;
