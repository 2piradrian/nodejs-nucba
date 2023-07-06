import { Router } from "express";
import { UserController } from "../controllers/user";
import { UserValidator } from "../validator/user";
import { AuthValidator } from "../validator/auth";

export const userRouter = Router();

userRouter.get("/user/:id", AuthValidator.checkToken, UserController.getUserById);

userRouter.post("/user/register", UserValidator.register, UserController.register);

userRouter.post("/user/login", UserController.login);
