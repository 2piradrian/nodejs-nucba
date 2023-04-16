import { get, save } from "./fileMethods.js";
import { promptNewExpense } from "./expensesPrompts.js";

const main = async () => {
	console.log("Hola, bienvenido al CLI de gastos");
	const newExpense = await promptNewExpense();

	console.log(" --- --- --- --- --- --- --- ---");
	console.log("Nuevo gasto: ");
	console.table(newExpense);
	console.log(" --- --- --- --- --- --- --- ---");

	const expenses = await get("expenses");
	expenses.push(newExpense);
	await save("expenses", expenses);

	console.log("Gastos historicos: ");
	console.table(expenses);
};

main();
