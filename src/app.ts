import express from "express";
import { userRouter } from "./routes/user.route";
import { expenseRouter } from "./routes/expense.route";

const app = express();

app.use(express.json());

app.use("/api", userRouter);
app.use("/api", expenseRouter);

app.listen(3000, () => {
	console.log("nodejs-nucba is running");
});
