const extractBookId = (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "Book id not found" });
  }

  req.bookId = id;
  next();
};

module.exports = extractBookId;
