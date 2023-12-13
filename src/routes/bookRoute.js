const express = require("express");
const {
  getBooks, getBookById, addBook, updateBook, deleteBook
} = require("../controllers/bookControllers");
const extractBookId = require("../middleware/bookMiddleware");

const bookRoute = express.Router();

bookRoute.get("/books", getBooks);
bookRoute.get("/book/:id", extractBookId, getBookById);
bookRoute.post("/books", addBook);
bookRoute.put("/book/:id", extractBookId, updateBook);
bookRoute.delete("/book/:id", extractBookId, deleteBook);

module.exports = bookRoute;
