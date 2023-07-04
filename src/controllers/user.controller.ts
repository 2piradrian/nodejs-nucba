import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export const UserController = {
	async getUserById(req: Request, res: Response) {
		const user = await UserService.getUserById(Number(req.params.id));
		res.json(user);
	},

	async createUser(req: Request, res: Response) {
		const { name, email, password } = req.body;
		const newUser = await UserService.register(name, email, password);
		res.json(newUser);
	},

	async login(req: Request, res: Response) {
		try {
			const { email, password } = req.body;
			const token = await UserService.login(email, password);
			res.json({ token });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	async register(req: Request, res: Response) {
		try {
			const { email, password, name } = req.body;
			const user = await UserService.register(name, email, password);
			res.json(user);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},
};
