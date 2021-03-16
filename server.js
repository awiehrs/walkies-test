require("dotenv").config();

const express = require("express");


const PORT = process.env.PORT || 8080;

const app = express();
const db = require("./models");
console.log("got past require/models line 9")
app.use(express.static("public"));


//ENABLE if you plan to use handlebars.
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//ENABLE if you plan to use controllers as routes/orm.
require("./controllers/html-routes.js")(app);
console.log("got past html-routes reference")
db.sequelize.sync({}).then(() => {
  app.listen(PORT, () => {
    console.log("Listening on localhost:" + PORT);
  });
});
