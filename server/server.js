const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: ".env" });
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("Database connected.");
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on ${port}.`);
});
