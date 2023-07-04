import express from "express";
import { userRouter } from "./routes/user.route";
import { expenseRouter } from "./routes/expense.route";

// Testing JWT
import jwt from "jsonwebtoken";
import bycript from "bcrypt";

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

app.post("/api/register", (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({ message: "Email and password are required" });
	}

	const hash = bycript.hash(password, 10);

	res.json({ hash });
});

app.post("/api/login", async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({ message: "Email and password are required" });
	}

	const userPassFromDatabase = "hash-password";
	const isValid = await bycript.compare(password, userPassFromDatabase);

	if (isValid) {
		const accessToken = jwt.sign({ password }, "my-password", { expiresIn: "1h" });
		return res.json({ accessToken });
	} else {
		return res.status(401).json({ message: "Invalid credentials" });
	}
});

app.listen(3000, () => {
	console.log("nodejs-nucba is running");
});
