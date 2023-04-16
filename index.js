import fs from "fs";
import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";

inquirer.registerPrompt("date", DatePrompt);

const main = async () => {
	console.log("Hello World");
	const answers = await inquirer.prompt([
		{
			type: "input",
			name: "name",
			message: "Cual es tu nombre?",
		},
		{
			type: "input",
			name: "category",
			message: "Que tipo de gasto es?",
		},
		{
			type: "date",
			name: "time",
			message: "Cual es la fecha del gasto?",
		},
	]);
};

main();
