const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Node.js App Running on EC2 with Docker and ansible project");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
