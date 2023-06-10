import { Router } from "express";
import { UserController } from "../controllers/user.controller";

export const userRouter = Router();

userRouter.get("/user/:id", UserController.getUserById);

userRouter.post("/user", UserController.createUser);
