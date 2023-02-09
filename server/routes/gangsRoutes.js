const express = require("express");
const router = express.Router();
const {
  getAllGangs,
  getGang,
  createGang,
  updateGang,
  deleteGang,
} = require("../controllers/gangsController");

router.route("/").get(getAllGangs).post(createGang);
router.route("/:id").get(getGang).patch(updateGang).delete(deleteGang);

module.exports = router;
