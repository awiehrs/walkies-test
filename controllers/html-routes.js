const express = require("express");
const dog = require("../models/dog.js");
const db = require("../models");
const router = express.Router();

router.get("/", (req, res) => {
  dog.call(data => {
    const hbsObject = {
      dogs: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/dogs", (req, res) => {
  dog.create(["name", "stage"], [req.body.name, req.body.stage], result => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/dogs/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  dog.update(
    {
      stage: req.body.stage
    },
    condition,
    result => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("index");
  });
};

console.log("got past html-routes.js");
