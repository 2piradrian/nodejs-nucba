import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ExpenseService = {
	async getExpenseById(id: number) {
		const expense = await prisma.expenses.findUnique({
			where: {
				id: Number(id),
			},
		});
		return expense;
	},

	async createExpense(amount: number, name: string, userId: number) {
		const date = new Date();
		const newExpense = await prisma.expenses.create({
			data: {
				amount,
				date,
				userId,
				name,
			},
		});
		return newExpense;
	},
};