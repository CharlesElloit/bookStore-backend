const db = require("../models");

/*
 ============ Create Book route =============
*/
exports.createBook = async (req, res) => {
  try {
    /*  
     ::TODO
     - validation
    */
    const book = new db.Book(req.body);

    const newBook = await db.Book.create(book);

    if (!newBook) {
      return res.status(500).json({
        error: "Something went wrong"
      });
    }

    return res.status(201).json({
      message: `Book ${newBook._id} is created Successfully!`
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "Something went wrong went creating the book"
    });
  }
};

/*
 ============= Get all books route =============
*/
exports.getAllBooks = async (req, res) => {
  try {
    const books = await db.Book.find({});
    if (!books) {
      return res.status(500).json({
        error: "There are no books found in the store."
      });
    }

    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "Something went wrong"
    });
  }
};

/*
 ========= Update Book info route ==========
*/
exports.updateBook = async (req, res) => {
  // TODO
};

/*
 ========= Delete Book route ================
*/
exports.deleteBook = async (req, res) => {
  try {
    // TODO
    // - only the own should delete the book

    // check if the book to delete exist in the database
    const isBookToDeleteExist = await db.Book.findById({ _id: req.params.id });
    if (!isBookToDeleteExist) {
      return res.json({
        message: "Book to delete doesn't exist"
      });
    }

    //if the book exist, we gonna find it and delete it.
    const bookToDelete = await db.Book.findByIdAndDelete({
      _id: req.params.id
    });
    if (!bookToDelete) {
      return res.status(404).json({
        error: "The book you want to delete doesn't exist"
      });
    }

    return res.status(200).json({
      message: `Book ${bookToDelete.title} is deleted successfully`
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "Something isn't right try again"
    });
  }
};
