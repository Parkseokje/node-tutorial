var express = require("express");
var logger = require("morgan");
var api = require("./route.api.js");

var app = express();
app.use(express.static("public"));

// app.all("*", middleware1);

if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
}

app.use("/api", api);
app.get("/", function (req, res) {
  res.send("Hello World!!");
});

app.get("/error", function (req, res) {
  throw new Error("error!");
  res.send("you cannot get this");
});

// 에러 핸들링
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// localhost:3000에서 서버 시작
app.listen(3000, function () {
  console.log("listening on port 3000!");
});
