import { ExpenseValidator } from "./../validator/expense.validator";
import { Router } from "express";
import { ExpenseController } from "../controllers/expense.controller";

export const expenseRouter = Router();

expenseRouter.get("/expense/:id", ExpenseController.getExpenseById);

expenseRouter.post(
	"/expense",
	ExpenseValidator.createExpenseValidation,
	ExpenseController.createExpense
);
