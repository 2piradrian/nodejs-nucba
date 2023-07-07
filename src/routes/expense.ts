import { AuthValidator } from "./../validator/auth";
import { ExpenseValidator } from "./../validator/expense";
import { Router } from "express";
import { ExpenseController } from "../controllers/expense";

export const expenseRouter = Router();

expenseRouter.post(
	"/expense",
	AuthValidator.checkToken,
	ExpenseValidator.create,
	ExpenseController.create
);

expenseRouter.get(
	"/expense/:id",
	AuthValidator.checkToken,
	ExpenseValidator.getByExpenseId,
	ExpenseController.getByExpenseId
);

expenseRouter.get(
	"/expense",
	AuthValidator.checkToken,
	ExpenseValidator.getByUserId,
	ExpenseController.getByUserId
);

expenseRouter.put(
	"/expense",
	AuthValidator.checkToken,
	ExpenseValidator.update,
	ExpenseController.update
);

expenseRouter.delete(
	"/expense/:id",
	AuthValidator.checkToken,
	ExpenseValidator.getByExpenseId,
	ExpenseController.delete
);
