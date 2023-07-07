import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const accessTokenSecret = process.env.access_token_secret ?? "";

export const UserService = {
	async getUserById(id: number) {
		const user = await prisma.users.findUnique({
			where: {
				id: id,
			},
			include: {
				expenses: true,
			},
		});
		return user;
	},

	async getUserByEmail(email: string) {
		const user = await prisma.users.findUnique({
			where: {
				email: email,
			},
		});
		return user;
	},

	async login(email: string, password: string): Promise<string> {
		const user = await prisma.users.findUnique({ where: { email } });

		if (!user) {
			throw new Error("Invalid credentials");
		}

		const passwordMatch = await bcrypt.compare(password, user.password);

		if (!passwordMatch) {
			throw new Error("Invalid credentials");
		}

		const token = jwt.sign({ userId: user.id }, accessTokenSecret, { expiresIn: "1h" });

		return token;
	},

	async register(
		name: string,
		email: string,
		password: string
	): Promise<{ id: number; email: string }> {
		const existingUser = await prisma.users.findUnique({ where: { email } });

		if (existingUser) {
			throw new Error("Email already registered");
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = await prisma.users.create({
			data: {
				name: name,
				email,
				password: hashedPassword,
			},
			select: {
				id: true,
				email: true,
			},
		});

		return newUser;
	},
};
