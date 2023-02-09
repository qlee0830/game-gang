const express = require("express");
const router = express.Router();
const {
  aliasTopUsers,
  getAllGames,
  getGame,
  createGame,
  updateGame,
  deleteGame,
  getGamesStats,
} = require("../controllers/gamesController");

router.route("/game-stats").get(getGamesStats);
router.route("/top-total-users").get(aliasTopUsers, getAllGames);
router.route("/").get(getAllGames).post(createGame);
router.route("/:id").get(getGame).patch(updateGame).delete(deleteGame);

module.exports = router;
