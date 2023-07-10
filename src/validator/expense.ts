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

		if (req.userIdFromToken !== userId) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		next();
	},
	getByExpenseId(req: RequestToken, res: Response, next: NextFunction) {
		const { id } = req.params;
		const { userId } = req.body;

		if (!id) {
			return res.status(400).json({ message: "Id is required" });
		}

		if (req.userIdFromToken !== userId) {
			return res.status(401).json({ message: "Unauthorized" });
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
		const { amount, name, userId } = req.body;
		if (!amount || !name) {
			return res.status(400).json({ message: "All fields are required" });
		}
		if (req.userIdFromToken !== userId) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		next();
	},
};
