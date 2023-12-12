const mongoose = require("mongoose");

const { Schema } = mongoose;
// Define a Book model
const Book = new Schema(
  {
    title: { type: String, required: true },
    genre: { type: String, required: true },
    author: { type: String, required: true },
    read: { type: Boolean, default: false },
  },
);

module.exports = mongoose.model("Book", Book);
