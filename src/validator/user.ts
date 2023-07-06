import { Request, Response, NextFunction } from "express";

export const UserValidator = {
	register(req: Request, res: Response, next: NextFunction) {
		const { name, email, password } = req.body;
		if (!name || !email || !password) {
			return res.status(400).json({ message: "All fields are required" });
		}
		if (password.length < 6) {
			return res.status(400).json({ message: "Password must be at least 6 characters" });
		}
		if (!email.includes("@") || !email.includes(".")) {
			return res.status(400).json({ message: "Invalid email" });
		}
		if (name.length < 3) {
			return res.status(400).json({ message: "Name must be at least 3 characters" });
		}
		next();
	},
	login(req: Request, res: Response, next: NextFunction) {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({ message: "All fields are required" });
		}
		if (password.length < 6) {
			return res.status(400).json({ message: "Password must be at least 6 characters" });
		}
		if (!email.includes("@") || !email.includes(".")) {
			return res.status(400).json({ message: "Invalid email" });
		}
		next();
	},
};
