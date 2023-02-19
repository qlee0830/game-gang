const crypto = require("crypto");
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
  password_changed_at: Date,
  password_reset_token: String,
  password_reset_expires: Date,
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

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.password_changed_at) {
    const changedTimestamp = parseInt(
      this.password_changed_at.getTime() / 1000,
      10
    );
    console.log(changedTimestamp, JWTTimestamp);
    return JWTTimestamp < changedTimestamp;
  }

  return false; // False means NOT changed
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.password_reset_token = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  console.log({ resetToken }, this.password_reset_token);
  this.password_reset_expires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = new mongoose.model("user", userSchema);
module.exports = User;
