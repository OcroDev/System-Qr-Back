import { Router } from "express";
import productController from "../controllers/productController.js";

const productRouter = Router();

//POST .../qrstock/api/user
productRouter.post("/", productController.store);
//GET .../qrstock/api/user
productRouter.get("/", productController.findAll);

export default productRouter;
