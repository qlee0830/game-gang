const express = require("express");
const app = express();

// middlewares
app.use("/", (req, res, next) => {
  res.status(200).json({ message: "Hello from server side!", status: "200" });
});

// routes

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
