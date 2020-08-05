let userController = require("../controllers/userController");

const express = require("express");
let router = express.Router();

router.get("/", async (req, res) => {
  userController.get_users(req, res);
});
router.post("/", async (req, res) => {
  userController.register_user(req, res);
});

module.exports = router;
