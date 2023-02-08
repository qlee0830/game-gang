const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "A game must have a name"],
  },
  release_date: {
    type: String,
    default: "2000-01-01",
    trim: true,
    required: [true, "A game must have a release date"],
  },
  company: {
    type: String,
    trim: true,
    required: [true, "A game must be created by a company"],
  },
  description: {
    type: String,
    trim: true,
  },
  total_users_in_millions: {
    type: Number,
    default: 0,
  },
  image_cover: {
    type: String,
    // required: [true, "A game should have an image"],
  },
  images: [String],
  game_added_at: {
    type: Date,
    default: Date.now(),
  },
});

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
