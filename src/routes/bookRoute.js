const express = require("express");
const { getBooks, getBookById, addBook, updateBook } = require("../controllers/bookControllers");

const bookRoute = express.Router();

bookRoute.get("/books", getBooks);
bookRoute.get("/book/:id", getBookById);
bookRoute.post("/books", addBook);
bookRoute.put("/book/:id", updateBook);

module.exports = bookRoute;
