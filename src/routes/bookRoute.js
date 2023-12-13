import express from "express";

import {
  getBooks, getBookById, addBook, updateBook, deleteBook
} from "../controllers/bookControllers.js";

import extractBookId from "../middleware/bookMiddleware.js";
import authMiddleware from "../middleware/auth.js";

const bookRoute = express.Router();

bookRoute.get("/books", getBooks);
bookRoute.get("/book/:id", extractBookId, getBookById);
bookRoute.post("/books", authMiddleware, addBook);
bookRoute.put("/book/:id", authMiddleware, extractBookId, updateBook);
bookRoute.delete("/book/:id", authMiddleware, extractBookId, deleteBook);

export default bookRoute;
