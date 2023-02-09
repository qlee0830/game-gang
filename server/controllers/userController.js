const User = require("../models/userModel");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const getAllUsers = catchAsync(async (req, res) => {
  // Execute
  const features = new APIFeatures(User.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const users = await features.query;

  res.status(200).json({
    status: "success",
    data: {
      users,
    },
    message: "Got all users",
  });
});
const getUser = catchAsync(async (req, res) => {
  const foundUser = await User.findById(req.params.id);

  if (!foundUser) return next(new AppError("No User found with that ID", 404));

  res.status(200).json({
    status: "success",
    data: foundUser,
  });
});
const createUser = catchAsync(async (req, res) => {
  const newUser = await User.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
});
const updateUser = catchAsync(async (req, res) => {
  const foundUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!foundUser) {
    return next(new AppError("No User found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: foundUser,
    message: "User updated",
  });
});
const deleteUser = catchAsync(async (req, res) => {
  const foundUser = await User.findByIdAndDelete(req.params.id);

  if (!foundUser) {
    return next(new AppError("No User found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    message: "User deleted",
  });
});

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };
