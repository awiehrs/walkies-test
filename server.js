require("dotenv").config();

const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();
const db = require("./models");
app.use(express.static("public"));



//ENABLE if you plan to use handlebars.
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//ENABLE if you plan to use controllers as routes/orm.
const routes = require("./controllers/html-routes.js");
app.use(routes);

db.sequelize.sync().then(() => {
  console.log("inside the sync function");
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
