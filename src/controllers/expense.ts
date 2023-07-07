import { Request, Response } from "express";
import { ExpenseService } from "../services/expense";

export const ExpenseController = {
	async create(req: Request, res: Response) {
		const { amount, name, userId } = req.body;
		const newExpense = await ExpenseService.createExpense(amount, name, userId);
		res.json(newExpense);
	},
	async getByExpenseId(req: Request, res: Response) {
		const expense = await ExpenseService.getByExpenseId(Number(req.params.id));
		res.json(expense);
	},
	async getByUserId(req: Request, res: Response) {
		const expenses = await ExpenseService.getByUserId(Number(req.params.userId));
		res.json(expenses);
	},
	async update(req: Request, res: Response) {
		const { amount, name } = req.body;
		const updatedExpense = await ExpenseService.update(Number(req.params.id), amount, name);
		res.json(updatedExpense);
	},
	async delete(req: Request, res: Response) {
		const deletedExpense = await ExpenseService.delete(Number(req.params.id));
		res.json(deletedExpense);
	},
};
