var middleware1 = function (req, res, next) {
  console.log("hello this is middleware1.");
  next();
};

module.exports = middleware1;
