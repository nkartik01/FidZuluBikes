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

router.get('/bikes/all', (request, response, next) => {

  let get_params = url.parse(request.url, true).query;
  if (Object.keys(get_params).length == 0) {
    response.setHeader('content-type', 'application/json');
    response.end(JSON.stringify(bikes.list()));
  } else {
    let key = Object.keys(get_params)[0]; // get first parameter only
    let value = request.query[key];
    try {
      let result = bikes.query_by_arg(key, value);
    } catch (err) {
      console.log("Caught exception.");
      //createError(500);
      res.status(500).send('Something broke!');
    }
    let result = bikes.query_by_arg(key, value);
    if (result) {
        console.log(result);
      response.setHeader('content-type', 'application/json');
      response.end(JSON.stringify(result));
    } else {
      next(createError(404));
    }
  }
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
