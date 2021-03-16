var express = require("express");

var router = express.Router();

var db = require("../models/index.js");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index");
    });
}

  // Export routes for server.js to use.
  module.exports = router;