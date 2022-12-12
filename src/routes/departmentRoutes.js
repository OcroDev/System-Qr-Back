import { Router } from "express";
import departmentController from "../controllers/departmentController.js";

const departmentRouter = Router();

//POST .../qrstock/api/user
departmentRouter.post("/", departmentController.store);
//GET .../qrstock/api/user
departmentRouter.get("/", departmentController.findAll);

export default departmentRouter;
