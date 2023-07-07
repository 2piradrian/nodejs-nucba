import { Request } from "express";

export type Expense = {
	id: number;
	amount: number;
	description: string;
	date: Date;
};

export type User = {
	id: number;
	name: string;
	email: string;
};

export interface RequestToken extends Request {
	userIdFromToken?: number;
}
