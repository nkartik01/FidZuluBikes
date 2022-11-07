const createError = require("http-errors");
var express = require("express");
var router = express.Router();
const bikes = require("../modules/bikes");
const url = require("url");

/* GET home page. */
router.get("", (request, response, next) => {
  response.render("index", { title: "Fidzulu Bikes" });
});

router.get("/bikes/team", (request, response, next) => {
  console.log("got into team");
  response.send(bikes.team());
});

router.get("/bikes/all/:location", (request, response, next) => {
  const param = request.params.location;
  console.log("got into bikes/:location " + param);
  const result = bikes.query_by_location(param);
  if (result) {
    response.send(result);
  } else {
    next(createError(404));
  }
});

module.exports = router;
