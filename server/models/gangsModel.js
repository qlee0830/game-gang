const mongoose = require("mongoose");

const gangSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "A gang must have a name"],
  },
  release_date: {
    type: String,
    default: "2000-01-01",
    trim: true,
    required: [true, "A gang must have a release date"],
  },
  company: {
    type: String,
    trim: true,
    required: [true, "A gang must be created by a company"],
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
    // required: [true, "A gang should have an image"],
  },
  images: [String],
  gang_added_at: {
    type: Date,
    default: Date.now(),
  },
});

const gang = mongoose.model("gang", gangSchema);
module.exports = gang;
