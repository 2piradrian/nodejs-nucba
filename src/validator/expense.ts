import { Request, Response, NextFunction } from "express";

export const ExpenseValidator = {
	create(req: Request, res: Response, next: NextFunction) {
		const { name, amount, date, userId, deleted } = req.body;
		if (!amount || !userId || !name || !date || !deleted) {
			return res.status(400).json({ message: "All fields are required" });
		}
		next();
	},
};
