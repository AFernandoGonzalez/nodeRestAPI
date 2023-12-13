import mongoose from "mongoose";
import dotenv from "dotenv";
// const Book = require("../models/books");
// const Books = require("../../books");

dotenv.config();

const MONGO_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connection SUCCESS");
    // const books = Books;
    // console.log("number of books:", books.length);
    // await Book.insertMany(books);
    // console.log("Data import SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL", error);
  }
};

export default connectDB;
