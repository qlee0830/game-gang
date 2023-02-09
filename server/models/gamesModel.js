const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
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
    premium: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

/**
 * Virtual Properties
 */
// gameSchema.virtual("release_year").get(() => {
//   return this.release_date.splice(0, 4);
// });

/**
 * Document Middleware: runs before save() and create()
 */
// gameSchema.pre("save", (next) => {
//   console.log(this);

//   next();
// });
// gameSchema.post("save", (doc, next) => {
//   console.log(doc);

//   next();
// });

/**
 * Query Middleware
 */
// gameSchema.pre("find", (next) => {
//   this.find({ premium: { $ne: true } });
//   next();
// });

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
