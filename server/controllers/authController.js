const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const sendEmail = require("../utils/email");

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

const protect = catchAsync(async (req, res, next) => {
  // Get token & check if it is there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token)
    return next(
      new AppError("You are not logged in. Please login to gain access!", 401)
    );

  // Verify token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // Check if user still exists
  const freshUser = await User.findById(decoded.id);
  if (!freshUser)
    return next(
      new AppError("The user belonging to this token no longer exist", 401)
    );

  // Check if user changed password after the token was issued
  if (freshUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError("User recently changed password. Please login again!", 401)
    );
  }

  req.user = freshUser;
  next();
});

const restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles ['admin', 'lead-guide']. role='user'
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }

    next();
  };
};

const forgotPassword = catchAsync(async (req, res, next) => {
  // get user based on POST email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(
      new AppError("There is no user associated with this email.", 404)
    );
  }

  // generate the random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // send it to user's email
  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/users/resetPassword/${resetToken}`;

  const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to ${resetURL}.\nIf you didn't forget your password, please ignore this.`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Your password reset token (valid for 10min)",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "Token sent to your email.",
    });
  } catch (error) {
    user.password_reset_token = undefined;
    user.password_reset_expires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError("There was an error sending the email. Try again!", 500)
    );
  }
});

const resetPassword = (req, res, next) => {};

module.exports = {
  signup,
  login,
  protect,
  restrictTo,
  forgotPassword,
  resetPassword,
};
