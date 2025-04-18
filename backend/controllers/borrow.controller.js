const Book = require("../models/book.model");

exports.borrowBook = async (req, res) => {
  const { bookId, borrowerId } = req.body;
  const book = await Book.findById(bookId);
  book.borrower = borrowerId;
  await book.save();
  res.json({ message: "Book borrowed" });
};

exports.returnBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  book.borrower = null;
  await book.save();
  res.json({ message: "Book returned" });
};