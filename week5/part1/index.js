const express = require("express");
const app = express();

app.get("/sum/:a/:b", function (req, res) {
  // for this the endpoint willl look like localhost:8080/sum/1/2
  res.json({
    ans: parseInt(req.params.a) + parseInt(req.params.b),
  });
});

app.get("/multiply", function (req, res) {
  res.json({
    ans: parseInt(req.query.a) * parseInt(req.query.b),
  });
});

app.get("/divide", function (req, res) {
  res.json({
    ans: parseInt(req.query.a) / parseInt(req.query.b),
  });
});

app.get("/subtract", function (req, res) {
  res.json({
    ans: parseInt(req.query.a) - parseInt(req.query.b),
  });
});

app.listen(3000);
