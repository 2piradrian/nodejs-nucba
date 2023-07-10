import { Request, Response } from "express";
import { UserService } from "../services/user";
import { RequestToken } from "../data/types";

export const UserController = {
	async getUserById(req: RequestToken, res: Response) {
		const user = await UserService.getUserById(Number(req.params.id));

		if (req.userIdFromToken !== user?.id) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		res.json(user);
	},

	async login(req: Request, res: Response) {
		try {
			const { email, password } = req.body;

			const token = await UserService.login(email, password);

			res.json({ token });
		} catch (error: any) {
			res.status(500).json({ error: error.message });
		}
	},

	async register(req: Request, res: Response) {
		try {
			const { email, password, name } = req.body;

			const user = await UserService.register(name, email, password);

			res.json(user);
		} catch (error: any) {
			res.status(500).json({ error: error.message });
		}
	},
};
