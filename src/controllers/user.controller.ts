import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export const UserController = {
	async getUserById(req: Request, res: Response) {
		const user = await UserService.getUserById(Number(req.params.id));
		res.json(user);
	},

	async createUser(req: Request, res: Response) {
		const { name, email, password } = req.body;
		const newUser = await UserService.createUser(name, email, password);
		res.json(newUser);
	},
};
