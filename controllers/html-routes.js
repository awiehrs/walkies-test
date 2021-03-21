const express = require("express");
const Dog = require("../models/dog");
const db = require("../models");
const router = express.Router();

// routes for getting data
router.get("/", (req, res) => {
  console.log("Testing Get Function");
  db.Dog.findAll({}).then(data => {
    const hbsObject = {
      dogs: data
    };
    console.log(hbsObject.dogs[0]);
    res.render("index", hbsObject);
  });
});

// routes for switch needswalk value
router.put("/api/dogs/:id", (req, res) => {
  const condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.update(
    {
      needswalk: true
    },
    condition,
    result => {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// router.post("/api/dogs", (req, res) => {
//   dog.create(["name", "stage"], [req.body.name, req.body.stage], result => {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/dogs/:id", (req, res) => {
//   const condition = `id = ${req.params.id}`;

//   console.log("condition", condition);

//   dog.update(
//     {
//       stage: req.body.stage
//     },
//     condition,
//     result => {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();
//     }
//   );
// });

module.exports = router;

// module.exports = function(app) {
//   app.get("/", (req, res) => {
//     res.render("index");
//   });
// };

// console.log("got past html-routes.js");
