import { Router, Request, Response, response } from "express";
import { PrismaClient } from "@prisma/client";

export const userRouter = Router();
const prisma = new PrismaClient();

userRouter.get("/user/:id", async (req: Request, res: Response) => {
	const user = await prisma.users.findUnique({
		where: {
			id: Number(req.params.id),
		},
	});
	res.json(user);
});

userRouter.post("/user", async (req: Request, res: Response) => {
	const { name, email } = req.body;
	const newUser = await prisma.users.create({
		data: {
			name,
			email,
		},
	});
	res.json(newUser);
});
