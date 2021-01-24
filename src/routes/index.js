const router = require("express").Router();
const bookController = require("../controllers/bookController.js");
const customerController = require("../controllers/customerController.js");

//Books routes
router.post("/books", bookController.createBook);
router.get("/books", bookController.getAllBooks);
router.delete("/books/:id", bookController.deleteBook);
router.put("/books/:id", bookController.updateBook);

//Customer routes
router.post("/register", customerController.registerCustomer);
router.post("/login", customerController.login);
router.get("/customers", customerController.getAllCustomers);

module.exports = router;
