import { Request, Response, NextFunction } from "express";

export const ExpenseValidator = {
	createExpenseValidation(req: Request, res: Response, next: NextFunction) {
		const { amount, date, userId, name } = req.body;
		if (!amount || !userId || !name) {
			return res
				.status(400)
				.json({ message: "El campo amount, userId y name son obligatorios" });
		}
		if (date !== undefined) {
			return res
				.status(400)
				.json({ message: "El campo date debe ser generado en el backend" });
		}
		next();
	},
};
