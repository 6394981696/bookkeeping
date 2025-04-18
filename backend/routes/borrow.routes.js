const express = require("express");
const router = express.Router();
const borrowCtrl = require("../controllers/borrow.controller");
const { authenticate } = require("../middlewares/auth.middleware");

router.use(authenticate);
router.post("/", borrowCtrl.borrowBook);
router.put("/return/:id", borrowCtrl.returnBook);

module.exports = router;