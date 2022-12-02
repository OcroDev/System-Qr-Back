import { Router } from "express";
import productController from "../controllers/productController.js";

const productRouter = Router();

//POST .../qrstock/api/user
productRouter.post("/", productController.store);

export default productRouter;
