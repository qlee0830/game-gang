const fs = require("fs");
const games = JSON.parse(fs.readFileSync(`${__dirname}/../data/games.json`));

const checkID = (req, res, next, val) => {
  if (req.params.id * 1 > games.length) {
    return res.status(404).json({
      status: "failed",
      message: "Invalid ID",
    });
  }
  next();
};

const getAllGames = (req, res) => {
  res.status(200).json({
    status: "success",
    count: games.length,
    data: {
      games,
    },
    message: "Got all current games",
  });
};
const getGame = (req, res) => {
  const id = req.params.id * 1;
  const foundGame = games.find((item) => item.id === id);

  res.status(200).json({
    status: "success",
    data: foundGame,
  });
};
const createGame = (req, res) => {
  const newID = games[games.length - 1].id + 1;
  const newGame = Object.assign({ id: newID }, req.body);

  const newList = [...games, newGame];

  fs.writeFile(
    `${__dirname}/data/games.json`,
    JSON.stringify(newList),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          game: newGame,
        },
      });
    }
  );
};
const updateGame = (req, res) => {
  const id = req.params.id * 1;
  const foundGame = games.find((item) => item.id === id);

  res.status(200).json({
    status: "success",
    data: foundGame,
    message: "game updated",
  });
};
const deleteGame = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
    message: "game deleted",
  });
};

module.exports = {
  getAllGames,
  getGame,
  createGame,
  updateGame,
  deleteGame,
  checkID,
};
