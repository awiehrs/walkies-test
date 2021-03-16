var db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index");
    });
}

console.log("got past html-routes.js")