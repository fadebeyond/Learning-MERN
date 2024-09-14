const express = require("express");
const app = express();

// let requestCount = 0;

// function requestIncreaser(req, res, next) {
//   requestCount += 1;
//   console.log("total number of request = " + requestCount);
//   next();
// }

// function realSumHandler(req, res) {
//   res.json({
//     ans: parseInt(req.query.a) + parseInt(req.query.b),
//   });
// }
// app.use(requestIncreaser);
// app.get("/sum", realSumHandler);

const bodyParse = require("body-parser");
function logger(req, res, next) {
  console.log("Method is : " + req.method);
  console.log("URL is : " + req.hostname + req.url);
  console.log(new Date());
  next();
}

app.use(bodyParse.json());
app.post("/sum", function (req, res) {
  res.json({
    ans: parseInt(req.body.a) + parseInt(req.body.b),
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
