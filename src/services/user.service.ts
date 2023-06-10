import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const UserService = {
	async getUserById(id: number) {
		const user = await prisma.users.findUnique({
			where: {
				id: id,
			},
		});
		return user;
	},

	async createUser(name: string, email: string) {
		const newUser = await prisma.users.create({
			data: {
				name: name,
				email: email,
			},
		});
		return newUser;
	},
};
