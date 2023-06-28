import express from "express";
import { userRouter } from "./routes/user.route";
import { expenseRouter } from "./routes/expense.route";

// Testing JWT
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());
app.use("/api", userRouter);
app.use("/api", expenseRouter);

// Testing JWT
app.post("/api/sendToken", (req, res) => {
	const { email, password } = req.body;
	const accessToken = jwt.sign({ password }, "my-password", { expiresIn: "1h" });

	res.json({ accessToken });
});

app.get("/api/readToken", (req, res) => {
	const token = req.headers.authorization?.split(" ")[1];

	if (!token) {
		return res.status(401).json({ message: "No token provided" });
	}
	try {
		const data = jwt.verify(token, "my-password");
		return res.json(data);
	} catch (error) {
		return res.status(401).json({ message: "Invalid token" });
	}
});

app.listen(3000, () => {
	console.log("nodejs-nucba is running");
});
