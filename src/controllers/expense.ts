import { RequestToken } from "./../data/types";
import { Request, Response } from "express";
import { ExpenseService } from "../services/expense";

export const ExpenseController = {
	async create(req: Request, res: Response) {
		const { amount, name, userId } = req.body;

		const newExpense = await ExpenseService.createExpense(amount, name, userId);

		res.json(newExpense);
	},
	async getByExpenseId(req: RequestToken, res: Response) {
		const expense = await ExpenseService.getByExpenseId(Number(req.params.id));

		if (req.userIdFromToken !== expense?.userId) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		res.json(expense);
	},
	async getByUserId(req: RequestToken, res: Response) {
		const userId = req.params.userId;

		const expenses = await ExpenseService.getByUserId(Number(req.params.userId));

		if (req!.userIdFromToken?.toString() !== userId) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		res.json(expenses);
	},
	async update(req: RequestToken, res: Response) {
		const { amount, name } = req.body;

		const expense = await ExpenseService.getByExpenseId(Number(req.params.id));

		if (req.userIdFromToken !== expense?.userId) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		const updatedExpense = await ExpenseService.update(Number(req.params.id), amount, name);

		res.json(updatedExpense);
	},
	async delete(req: RequestToken, res: Response) {
		const expense = await ExpenseService.getByExpenseId(Number(req.params.id));

		if (req.userIdFromToken !== expense?.userId) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		const deletedExpense = await ExpenseService.delete(Number(req.params.id));

		res.json(deletedExpense);
	},
};
