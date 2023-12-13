import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import bookRoute from "./src/routes/bookRoute.js";
import userRouter from "./src/routes/userRoute.js";
import connectDB from "./src/db/db.js";
import { RateLimiter } from "https://deno.land/x/oak_rate_limit/mod.ts";

dotenv.config();

const app = express();
connectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiLimiter = RateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 100,
  headers: true,
  message: "Too many requests, please try again in 15 minutes.",
  statusCode: 429, // Default status code if rate limit reached.
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
