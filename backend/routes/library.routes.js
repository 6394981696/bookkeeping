const express = require("express");
const router = express.Router();
const libraryCtrl = require("../controllers/library.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const authorizeRoles = require("../middlewares/role.middleware");

router.use(authenticate);
router.get("/", libraryCtrl.getLibraries);
router.get("/:id", libraryCtrl.getLibraryById);
router.post("/", authorizeRoles("Author"), libraryCtrl.createLibrary);
router.put("/:id", authorizeRoles("Author"), libraryCtrl.updateLibrary);
router.delete("/:id", authorizeRoles("Author"), libraryCtrl.deleteLibrary);
router.get("/:id/inventory", libraryCtrl.getInventory);
router.post("/:id/inventory", authorizeRoles("Author"), libraryCtrl.addToInventory);
router.delete("/:id/inventory/:bookId", authorizeRoles("Author"), libraryCtrl.removeFromInventory);

module.exports = router;