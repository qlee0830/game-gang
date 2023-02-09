const Game = require("../models/gamesModel");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const aliasTopUsers = (req, res, next) => {
  req.query.limit = "10";
  req.query.sort = "total_users_in_millions";
  req.query.fields = "name,description,total_users_in_millions";
  next();
};
const getAllGames = catchAsync(async (req, res) => {
  // Execute
  const features = new APIFeatures(Game.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const games = await features.query;

  res.status(200).json({
    status: "success",
    data: {
      games,
    },
    message: "Got all games",
  });
});
const getGame = catchAsync(async (req, res) => {
  const foundGame = await Game.findById(req.params.id);

  if (!foundGame) return next(new AppError("No game found with that ID", 404));

  res.status(200).json({
    status: "success",
    data: foundGame,
  });
});
const createGame = catchAsync(async (req, res) => {
  const newGame = await Game.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      game: newGame,
    },
  });
});
const updateGame = catchAsync(async (req, res) => {
  const foundGame = await Game.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!foundGame) {
    return next(new AppError("No game found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: foundGame,
    message: "game updated",
  });
});
const deleteGame = catchAsync(async (req, res) => {
  const foundGame = await Game.findByIdAndDelete(req.params.id);

  if (!foundGame) {
    return next(new AppError("No game found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    message: "game deleted",
  });
});
const getGamesStats = catchAsync(async (req, res) => {
  const stats = await Game.aggregate([
    {
      $match: { total_users_in_millions: { $lt: 100 } },
    },
    {
      $group: {
        _id: null,
        numGames: { $sum: 1 },
        totalCopiesSold: { $sum: "$total_users_in_millions" },
      },
    },
  ]);

  res.status(200).json({
    status: "success",
    data: stats,
    message: "game statistics",
  });
});

module.exports = {
  aliasTopUsers,
  getAllGames,
  getGame,
  createGame,
  updateGame,
  deleteGame,
  getGamesStats,
};
