const express = require("express");
const { sendMessage, getMessage } = require("../controller/message.controller");
const router = express.Router();
const { protectRoute } = require("../middleware/protectRoute");

router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", getMessage);
module.exports = router;
