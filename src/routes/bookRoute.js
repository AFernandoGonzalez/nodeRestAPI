const express = require("express");
const {
  getBooks, getBookById, addBook, updateBook, deleteBook
} = require("../controllers/bookControllers");
const extractBookId = require("../middleware/bookMiddleware");
const authMiddleware = require("../middleware/auth");

const bookRoute = express.Router();

bookRoute.get("/books", getBooks);
bookRoute.get("/book/:id", extractBookId, getBookById);
bookRoute.post("/books", authMiddleware, addBook);
bookRoute.put("/book/:id", authMiddleware, extractBookId, updateBook);
bookRoute.delete("/book/:id", authMiddleware, extractBookId, deleteBook);

module.exports = bookRoute;
