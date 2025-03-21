import express from "express";
import connectDB from "./db/mongodb.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;
connectDB();
app.get("/", (req, res) => {
  res.send("Welcome to Echo");
});

app.listen(port, () => {
  console.log(`Echo is listening on port ${port}`);
});
