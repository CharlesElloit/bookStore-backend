const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  subtitle: { type: String, trim: true },
  authors: [{ type: String, required: true, trim: true }],
  publisher: { type: String, required: true, trim: true },
  publishedDate: { type: Date, required: true },
  description: { type: String, trim: true },
  industryIdentifiers: { type: { type: String }, identifier: String },
  pageCount: { type: Number, required: true },
  categories: [{ type: String, required: true }],
  bookCoverImageLinks: {
    thumbnail: { type: String },
    small: { type: String },
    medium: { type: String },
    large: { type: String }
  },
  bookEdition: { type: String, required: true, trim: true },
  language: { type: String, required: true },
  epub: {
    isAvailable: { type: Boolean, required: true },
    downloadLink: { type: String }
  },
  pdf: {
    isAvailable: { type: Boolean, required: true },
    downloadLink: { type: String }
  }
});

module.exports = mongoose.model("Book", bookSchema);
