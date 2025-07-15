import express from "express";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/greet", (req, res) => {
  res.send("byee");
});

app.listen(port, () => {
  console.log(`now listening on http://localhost:${port}`);
});
