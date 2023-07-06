import { AuthValidator } from "./../validator/auth";
import { ExpenseValidator } from "./../validator/expense";
import { Router } from "express";
import { ExpenseController } from "../controllers/expense";

export const expenseRouter = Router();

expenseRouter.get("/expense/:id", AuthValidator.checkToken, ExpenseController.getExpenseById);

expenseRouter.post(
	"/expense",
	AuthValidator.checkToken,
	ExpenseValidator.createExpenseValidation,
	ExpenseController.createExpense
);
