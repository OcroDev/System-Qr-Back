import { Router } from "express";
import officeController from "../controllers/officeController.js";

const oficceRouter = Router();

//POST .../qrstock/api/colleges
oficceRouter.post("/", officeController.store);

export default oficceRouter;
