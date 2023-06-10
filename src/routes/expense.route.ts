import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";

export const expenseRouter = Router();

const prisma = new PrismaClient();

expenseRouter.get("/expense/:id", async (req: Request, res: Response) => {
	const expense = await prisma.expenses.findUnique({
		where: {
			id: Number(req.params.id),
		},
	});
	res.json(expense);
});

expenseRouter.post("/expense", async (req: Request, res: Response) => {
	const { amount, name, date, userId } = req.body;
	const newExpense = await prisma.expenses.create({
		data: {
			amount,
			date,
			userId,
			name,
		},
	});
	res.json(newExpense);
});
