import { Router } from "express";
import movementController from "../controllers/movementController.js";

const movementRouter = Router();

movementRouter.post("/", movementController.store);

export default movementRouter;
