const express = require("express");
const router = express.Router();
const {
  getAllGames,
  getGame,
  createGame,
  updateGame,
  deleteGame,
  checkID,
} = require("../controllers/gamesController");

router.param("id", checkID);

router.route("/").get(getAllGames).post(createGame);
router.route("/:id").get(getGame).patch(updateGame).delete(deleteGame);

module.exports = router;
