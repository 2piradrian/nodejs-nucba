import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { UserValidator } from "../validator/user.validator";

export const userRouter = Router();

userRouter.get("/user/:id", UserController.getUserById);

userRouter.post("/user", UserValidator.createUserValidation, UserController.createUser);
