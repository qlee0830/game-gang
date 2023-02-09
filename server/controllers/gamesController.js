const Game = require("../models/gamesModel");

class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-game_added_at");
    }

    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select("-__v");
    }

    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

const aliasTopUsers = (req, res, next) => {
  req.query.limit = "10";
  req.query.sort = "total_users_in_millions";
  req.query.fields = "name,description,total_users_in_millions";
  next();
};
const getAllGames = async (req, res) => {
  try {
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
const getGamesStats = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: "Can't get stats",
    });
  }
};

module.exports = {
  aliasTopUsers,
  getAllGames,
  getGame,
  createGame,
  updateGame,
  deleteGame,
  getGamesStats,
};
