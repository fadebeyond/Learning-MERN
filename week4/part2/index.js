const express = require("express");
const app = express();

//route handlers
app.get("/", function (req, res) {
  res.send("Hello");
});

app.listen(3000);
