const fs = require("fs");
let read_json_bikes = () => {
  let file = "./data/bikejson.json";
  return fs.readFileSync(file);
};

let read_json_location = () => {
  let file = "./data/location.json";
  return fs.readFileSync(file);
};

let read_json_team = () => {
  let file = "./data/team.json";
  return fs.readFileSync(file);
};

exports.list = function () {
  return JSON.parse(read_json_bikes());
};

exports.team = function () {
  return JSON.parse(read_json_team());
};

exports.query_by_location = (value) => {
  let json_result = JSON.parse(read_json_location());
  let bike_results = JSON.parse(read_json_bikes());
  console.log("query by location: " + value);
  for (let i = 0; i < json_result.length; i++) {
    let location = json_result[i];
    if (location.name.toLowerCase() === value.toLowerCase()) {
      for (let j = 0; j < bike_results.length; j++) {
        let bike = bike_results[j];
        bike.price = bike.price + (bike.price * location.tax) / 100;
      }
      return bike_results;
    }
  }
  return null;
};
