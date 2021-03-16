const express = require("express");

const router = express.Router();

const db = require("../models/index.js");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("index");
  });
};

// Export routes for server.js to use.
module.exports = router;
