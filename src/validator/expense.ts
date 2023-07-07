import { Response, NextFunction } from "express";
import { RequestToken } from "../data/types";

export const ExpenseValidator = {
	create(req: RequestToken, res: Response, next: NextFunction) {
		const { name, amount, date, userId, deleted } = req.body;
		if (!amount || !userId || !name || !date || !deleted) {
			return res.status(400).json({ message: "All fields are required" });
		}

		if (typeof amount !== "number") {
			return res.status(400).json({ message: "Amount must be a number" });
		}

		// is the user a expense owner?

		next();
	},
	getByExpenseId(req: RequestToken, res: Response, next: NextFunction) {
		const { id } = req.params;

		if (!id) {
			return res.status(400).json({ message: "Id is required" });
		}
		next();
	},
	getByUserId(req: RequestToken, res: Response, next: NextFunction) {
		const { userId } = req.params;

		if (!userId) {
			return res.status(400).json({ message: "Id is required" });
		}
		next();
	},
	update(req: RequestToken, res: Response, next: NextFunction) {
		const { amount, name } = req.body;
		if (!amount || !name) {
			return res.status(400).json({ message: "All fields are required" });
		}
		next();
	},
};
