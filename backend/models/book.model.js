const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String, // Firebase URL
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  borrower: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  library: { type: mongoose.Schema.Types.ObjectId, ref: "Library" },
});

module.exports = mongoose.model("Book", bookSchema);