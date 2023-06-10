import { Request, Response, NextFunction } from "express";

export const UserValidator = {
	createUserValidation(req: Request, res: Response, next: NextFunction) {
		const { name, email } = req.body;
		if (!name || !email) {
			return res.status(400).json({ message: "El nombre y el email son requeridos" });
		}
		next();
	},
};
