const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const bookRoute = require("./src/routes/bookRoute");
const userRouter = require("./src/routes/userRoute");
const connectDB = require("./src/db/db");

dotenv.config();

const app = express();
connectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again in 15 minutes!"
});

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("My Rest API");
});

app.use("/api", apiLimiter, bookRoute);
app.use("/api/auth", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
