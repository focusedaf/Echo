const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Echo");
});

app.listen(port, () => {
  console.log(`Echo is listening on port ${port}`);
});
