const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const signup = catchAsync(async (req, res, next) => {
  const { name, email, password, password_confirm } = req.body;
  const newUser = await User.create({
    name,
    email,
    password,
    password_confirm,
  });

  const token = signToken(newUser._id);

  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });
});

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // check if email & pw exist
  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }

  // check if user exists & pw is correct
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password!", 401));
  }

  // if everything okay, send token to client
  const token = signToken(user._id);

  res.status(200).json({
    status: "success",
    token,
  });
});

module.exports = { signup, login };
