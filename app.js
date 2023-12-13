const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const bookRoute = require("./src/routes/bookRoute");
const connectDB = require("./src/db/db");

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("My Rest API");
});

app.use("/api", bookRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
