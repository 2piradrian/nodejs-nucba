import { ExpenseValidator } from "./../validator/expense.validator";
import { Router } from "express";
import { ExpenseController } from "../controllers/expense.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export const expenseRouter = Router();

expenseRouter.get("/expense/:id", AuthMiddleware.checkToken, ExpenseController.getExpenseById);

expenseRouter.post(
	"/expense",
	AuthMiddleware.checkToken,
	ExpenseValidator.createExpenseValidation,
	ExpenseController.createExpense
);
