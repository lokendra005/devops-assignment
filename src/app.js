const express = require("express");
const app = express();
const accountRoutes = require("./routes/accountRoutes");

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.use("/accounts", accountRoutes);

module.exports = app;
