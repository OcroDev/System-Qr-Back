import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouter = Router();

//POST .../qrstock/api/user
userRouter.post("/", userController.store);

export default userRouter;
