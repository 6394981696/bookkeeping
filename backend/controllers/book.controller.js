const Book = require("../models/book.model");

exports.getBooks = async (req, res) => {
  const books = await Book.find().populate("author borrower library");
  res.status(200).json(books);
};

exports.getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id).populate("author borrower library");
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
};

exports.createBook = async (req, res) => {
  const { title, description, image, author, library } = req.body;
  const book = new Book({ title, description, image, author, library });
  await book.save();
  res.status(201).json({ message: "Book created" });
};

exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
};

exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
};