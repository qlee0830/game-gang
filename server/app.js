const express = require("express");
const morgan = require("morgan");

const app = express();
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const gamesRouter = require("./routes/gamesRoutes");
const gangsRouter = require("./routes/gangsRoutes");
const usersRouter = require("./routes/userRoutes");

// middlewares
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/games", gamesRouter);
app.use("/api/gangs", gangsRouter);
app.use("/api/users", usersRouter);
app.all("*", (req, res, next) => {
  next(new AppError(`Can't locate this ${req.originalUrl} on this app.`, 404));
});
app.use(globalErrorHandler);

module.exports = app;
