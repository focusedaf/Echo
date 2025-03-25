import express from "express";
import connectDB from "./db/mongodb.js";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/user.routes.js";
import trackerRouter from "./routes/tracker.routes.js";
import studyMaterialRouter from "./routes/studyMaterial.routes.js";

const app = express();
const port = 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.use("/api/user", trackerRouter);
app.use("/api/material", studyMaterialRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Echo");
});

console.log(app._router.stack.map((r) => r.route?.path).filter(Boolean));

app.listen(port, () => {
  console.log(`Echo is listening on port http://localhost:${port}`);
});
