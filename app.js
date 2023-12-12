const express = require("express");
const dotenv = require("dotenv");
const bookRoute = require("./src/routes/bookRoute");
const connectDB = require("./src/db/db");

dotenv.config();

const app = express();
connectDB();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", bookRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
