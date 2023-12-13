const Book = require("../models/books");

const getBooks = async (req, res) => {
  const { genre } = req.query;

  try {
    let books;
    if (genre) {
      books = await Book.find({ genre });
    } else {
      books = await Book.find();
    }

    // Adding HATEOAS
    const returnBook = books.map((book) => {
      const newBook = book.toJSON();
      newBook.links = {};
      newBook.links.self = `http://${req.headers.host}/api/book/${book._id}`;
      return newBook;
    });

    return res.status(200).json(returnBook);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const getBookById = async (req, res) => {
  const { bookId } = req;
  try {
    const book = await Book.findById(bookId);

    // Adding HATEOAS
    const returnBook = book.toJSON();
    returnBook.links = {};
    returnBook.links.FilterByThisGenre = `http://${req.headers.host}/api/books?genre=${book.genre.replace(" ", "%20")}`;

    return res.status(200).json(returnBook);
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const addBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    console.log(book);
    await book.save();
    return res.status(201).json(book);
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const updateBook = async (req, res) => {
  const { bookId } = req;
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      req.body,
      { new: true }
    );
    if (!updatedBook) return res.status(404).json({ error: "Book not found" });
    return res.status(202).json(updatedBook);
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const deleteBook = async (req, res) => {
  const { bookId } = req;

  try {
    const deletedBook = await Book.findByIdAndDelete(bookId);
    return res.status(200).json(deletedBook);
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = {
  getBooks, getBookById, addBook, updateBook, deleteBook
};
