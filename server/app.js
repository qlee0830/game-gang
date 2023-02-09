const express = require("express");
const morgan = require("morgan");

const app = express();
const gamesRouter = require("./routes/gamesRoutes");
const gangsRouter = require("./routes/gangsRoutes");
const usersRouter = require("./routes/userRoutes");

// middlewares
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/games", gamesRouter);
app.use("/api/gangs", gangsRouter);
app.use("/api/users", usersRouter);

module.exports = app;
