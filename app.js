import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
// eslint-disable-next-line import/no-extraneous-dependencies
import rateLimit from "express-rate-limit";
import bookRoute from "./src/routes/bookRoute.js";
import userRouter from "./src/routes/userRoute.js";
import connectDB from "./src/db/db.js";

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

app.get("/", (req, res) => {
  res.send("My Rest API");
});

app.use("/api", apiLimiter, bookRoute);
app.use("/api/auth", userRouter);

// const PORT = process.env.PORT || 8000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

export default app;
