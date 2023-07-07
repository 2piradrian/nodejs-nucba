import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ExpenseService = {
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
	async getByExpenseId(id: number) {
		const expense = await prisma.expenses.findUnique({
			where: {
				id: Number(id),
			},
		});
		return expense;
	},
	async getByUserId(userId: number) {
		const expenses = await prisma.expenses.findMany({
			where: {
				userId: userId,
			},
		});
		return expenses;
	},
	async update(id: number, amount: number, name: string) {
		const updatedExpense = await prisma.expenses.update({
			where: {
				id: id,
			},
			data: {
				amount: amount,
				name: name,
			},
		});
		return updatedExpense;
	},
	async delete(id: number) {
		const deletedExpense = await prisma.expenses.update({
			where: {
				id: id,
			},
			data: {
				deleted: true,
			},
		});
		return deletedExpense;
	},
};
