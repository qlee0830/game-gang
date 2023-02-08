const express = require("express");
const router = express.Router();
const {
  getAllGames,
  getGame,
  createGame,
  updateGame,
  deleteGame,
} = require("../controllers/gamesController");

router.route("/").get(getAllGames).post(createGame);
router.route("/:id").get(getGame).patch(updateGame).delete(deleteGame);

module.exports = router;
