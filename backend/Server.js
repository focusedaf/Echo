import express from "express";
import connectDB from "./db/mongodb.js";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/user.routes.js";
import trackerRouter from "./routes/tracker.routes.js";

const app = express();
const port = 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.use("/api/user", trackerRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Echo");
});

app.listen(port, () => {
  console.log(`Echo is listening on port ${port}`);
});
