const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    return res.send("Welcome to FidZulu Bikes Backend");
  } catch (err) {
    console.log(err);
    res.status(500).send(err.toString);
  }
});

module.exports = router;
