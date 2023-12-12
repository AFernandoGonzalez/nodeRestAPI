const Book = require("../models/books");

const getBooks = async (req, res) => {
  let books = [];
  try {
    books = await Book.find();
  } catch (error) {
    console.log(error);
  }
  return res.status(200).json(books);
};

module.exports = { getBooks };
