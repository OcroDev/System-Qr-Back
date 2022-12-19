import { Router } from "express";
import productController from "../controllers/productController.js";

const productRouter = Router();

//POST .../qrstock/api/product ... CREATE ONE
productRouter.post("/", productController.store);
//GET .../qrstock/api/product ... FIND ALL
productRouter.get("/", productController.findAll);
//DELETE .../qrstock/api/product ... DELETE ONE
productRouter.delete("/:id", productController.delete);
//PUT .../qrstock/api/product ... FIND ONE
productRouter.put("/:id", productController.update);

export default productRouter;
