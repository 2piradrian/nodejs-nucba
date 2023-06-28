import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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

	async createUser(name: string, email: string, password: string) {
		const newUser = await prisma.users.create({
			data: {
				name: name,
				email: email,
				password: password,
			},
		});
		return newUser;
	},
};
