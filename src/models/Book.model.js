const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  subtitle: { type: String, trim: true },
  description: { type: String, required: true, trim: true },
  bookEdition: { type: String, required: true, trim: true },
  bookCover: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: true, trim: true },
  published_Date: { type: Date, required: true },
  ISBN: { type: String }
});

module.exports = mongoose.model("Book", bookSchema);
