const Library = require("../models/library.model");

exports.getLibraries = async (req, res) => {
  const libraries = await Library.find();
  res.json(libraries);
};

exports.getLibraryById = async (req, res) => {
  const library = await Library.findById(req.params.id).populate({
    path: "books",
    populate: { path: "borrower" },
  });
  if (!library) return res.status(404).json({ message: "Library not found" });
  res.json(library);
};

exports.createLibrary = async (req, res) => {
  const lib = new Library(req.body);
  await lib.save();
  res.status(201).json({ message: "Library created" });
};

exports.updateLibrary = async (req, res) => {
  const lib = await Library.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(lib);
};

exports.deleteLibrary = async (req, res) => {
  await Library.findByIdAndDelete(req.params.id);
  res.json({ message: "Library deleted" });
};

exports.getInventory = async (req, res) => {
  const lib = await Library.findById(req.params.id).populate("books");
  res.json(lib.books);
};

exports.addToInventory = async (req, res) => {
  const lib = await Library.findById(req.params.id);
  lib.books.push(req.body.bookId);
  await lib.save();
  res.json({ message: "Book added to inventory" });
};

exports.removeFromInventory = async (req, res) => {
  const lib = await Library.findById(req.params.id);
  lib.books = lib.books.filter((id) => id.toString() !== req.params.bookId);
  await lib.save();
  res.json({ message: "Book removed from inventory" });
};