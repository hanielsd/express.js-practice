const express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  res.send([{ message: "Welcome to node", author: "Haniel Alex" }]);
});

module.exports = router;
