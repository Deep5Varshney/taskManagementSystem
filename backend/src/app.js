const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/task.routes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(cors({
  origin: process.env.CORS_ORIGIN || "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", timestamp: new Date().toISOString() });
});

app.use(errorHandler);

module.exports = app;