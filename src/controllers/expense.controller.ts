import { Request, Response } from "express";
import { ExpenseService } from "../services/expense.service";

export const ExpenseController = {
	async getExpenseById(req: Request, res: Response) {
		const expense = await ExpenseService.getExpenseById(Number(req.params.id));
		res.json(expense);
	},
	async createExpense(req: Request, res: Response) {
		const { amount, name, date, userId } = req.body;
		const newExpense = await ExpenseService.createExpense(amount, name, date, userId);
		res.json(newExpense);
	},
};
