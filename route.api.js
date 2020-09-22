var express = require("express");
var middleware1 = require("./middleware.simple.js");
var router = express.Router();

// /api
router.get("/", middleware1, function (req, res) {
  res.send("this is api route");
});

// /api/no-middleware
router.get("/no-middleware", function (req, res, next) {
  return next(new Error("Beep!"));
  res.send("this is api route with no middleware");
});

module.exports = router;
