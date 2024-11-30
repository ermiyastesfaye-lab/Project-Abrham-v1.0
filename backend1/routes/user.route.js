const express = require("express");
const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUsersForSidebar,
} = require("../controller/user.controller");
const router = express.Router();

router.get("/", getUsers);
router.get("/sidebar", getUsersForSidebar);
router.get("/:id", getUserById);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
