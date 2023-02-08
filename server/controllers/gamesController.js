const Game = require("../models/gamesModel");

const getAllGames = async (req, res) => {
  try {
    const games = await Game.find();

    res.status(200).json({
      status: "success",
      data: {
        games,
      },
      message: "Got all current games",
    });
  } catch (err) {
    res.status(404).json({
      staus: "failed",
      message: err,
    });
  }
};
const getGame = async (req, res) => {
  try {
    const foundGame = await Game.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: foundGame,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};
const createGame = async (req, res) => {
  try {
    const newGame = await Game.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        game: newGame,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
const updateGame = async (req, res) => {
  try {
    const foundGame = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: foundGame,
      message: "game updated",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};
const deleteGame = async (req, res) => {
  try {
    const foundGame = await Game.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      message: "game deleted",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

module.exports = {
  getAllGames,
  getGame,
  createGame,
  updateGame,
  deleteGame,
};
