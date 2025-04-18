const express = require("express");
const router = express.Router();
const bookCtrl = require("../controllers/book.controller");
const { authenticate } = require("../middlewares/auth.middleware");

router.use(authenticate);
router.get("/", bookCtrl.getBooks);
router.get("/:id", bookCtrl.getBookById);
router.post("/", bookCtrl.createBook);
router.put("/:id", bookCtrl.updateBook);
router.delete("/:id", bookCtrl.deleteBook);

module.exports = router;