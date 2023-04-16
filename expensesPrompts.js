import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";

inquirer.registerPrompt("date", DatePrompt);

export async function promptNewExpense() {
	return await inquirer.prompt(expensesPrompts);
}

const expensesPrompts = [
	{
		type: "input",
		name: "name",
		message: "Cuál es tu nombre?",
		prefix: " 😎 ",
	},
	{
		type: "input",
		name: "category",
		message: "Qué tipo de gasto es?",
		prefix: " 😬 ",
	},
	{
		type: "date",
		name: "time",
		message: "Cuál es la fecha del gasto?",
		prefix: " 📅 ",
		locale: "en-US",
		format: { month: "short", hour: undefined, minute: undefined },
	},
	{
		type: "number",
		name: "amount",
		message: "Cuanto dolió?",
		prefix: " 💸 ",
	},
];
