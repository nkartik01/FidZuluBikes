const express = require("express");
const app = express();

const indexRoute = require("./routes/index");
app.use("/", indexRoute);

const PORT = 3031;
app.listen(PORT, () => {
  console.log("Bikes service listening on port", PORT);
});
