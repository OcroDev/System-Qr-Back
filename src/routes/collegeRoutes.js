import { Router } from "express";
import collegesController from "../controllers/collegesController.js";

const collegesRouter = Router();

//POST .../qrstock/api/colleges
collegesRouter.post("/", collegesController.store);

export default collegesRouter;
