import { Router } from "express";
import { ExpenseController } from "../controllers/expense.controller";

export const expenseRouter = Router();

expenseRouter.get("/expense/:id", ExpenseController.getExpenseById);

expenseRouter.post("/expense", ExpenseController.createExpense);
