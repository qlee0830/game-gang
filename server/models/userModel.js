const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A name is required for new user."],
  },
  email: {
    type: String,
    required: [true, "A user must have an email."],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email!"],
  },
  photo: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    minLength: 8,
    select: false,
  },
  password_confirm: {
    type: String,
    required: [true, "Passwords must match."],
    minLength: 8,
    validate: {
      // This only works on SAVE
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same.",
    },
  },
});

userSchema.pre("save", async function (next) {
  // ONLY run this function if password was modified
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.password_confirm = undefined;

  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = new mongoose.model("user", userSchema);
module.exports = User;
