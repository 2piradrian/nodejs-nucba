import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { UserValidator } from "../validator/user.validator";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export const userRouter = Router();

userRouter.get("/user/:id", AuthMiddleware.checkToken, UserController.getUserById);

userRouter.post("/user", UserValidator.createUserValidation, UserController.createUser);
