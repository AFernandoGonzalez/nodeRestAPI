const express = require("express");
const { getBooks } = require("../controllers/bookControllers");

const bookRoute = express.Router();

bookRoute.get("/books", getBooks);

module.exports = bookRoute;
