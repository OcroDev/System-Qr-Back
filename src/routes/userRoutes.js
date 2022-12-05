import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouter = Router();

//POST .../qrstock/api/user
userRouter.post("/", userController.store);
//GET .../qrstock/api/user
userRouter.get("/", userController.findAll);

export default userRouter;
