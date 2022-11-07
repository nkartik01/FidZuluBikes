const express = require("express");
var path = require("path");
const app = express();

const indexRoute = require("./routes/index");
var cors = require("cors");

app.use(cors());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use("/", indexRoute);

const PORT = 3031;
app.listen(PORT, () => {
  console.log("Bikes service listening on port", PORT);
});
