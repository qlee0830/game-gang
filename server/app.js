const express = require("express");
const morgan = require("morgan");

const app = express();
const gamesRouter = require("./routes/gamesRoutes");

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use((req, res, next) => {
  console.log("Hi from middleware");
  next();
});

// routes
app.use("/api/games", gamesRouter);

module.exports = app;
