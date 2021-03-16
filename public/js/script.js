$(document).ready(() => {
  const todayDisplay = moment().format("ddd[ - ] MMMM Do[,] YYYY");
  console.log(todayDisplay);
  $("#currentDay").text(todayDisplay);

  const express = require("express");
  const exphbs = require("express-handlebars");
  const mysql = require("mysql");
  const app = express();

  // Set the port of our application
  // process.env.PORT lets the port be set by Heroku
  const PORT = process.env.PORT || 8080;

  // Sets up the Express app to handle data parsing
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

<<<<<<< HEAD
=======
  // Button functions
  function viewClients() {
    e.preventDefault();
    $(".homePage").addClass("hidePage");
    $(".dogBox").removeClass("hidePage");
    // Add script to change text on button from "View Client List" to "View Home Page" or make a second button for view home appear
  }

  function addFormDisplay() {
    e.preventDefault();
    $(".addForm").removeClass("hidePage");
  }

  $(".addDogButton").click(addFormDisplay);
  $(".topBtn").click(viewClients);

<<<<<<< HEAD
>>>>>>> f9403f5abb4ff32f6d687a3a506795d84c88763f
  $("input#newDog").on("click", () => {
=======

  //add new dog
  $("input#saveForm").on("click", () => {
>>>>>>> e3fcd10e57a3e23f1893c1e413f615fb59d0ae95
    const dog_Name = $("input#dog_Name").val();
    if ($.trim(dog_name) !== " ") {
      $.post("ajax/dog_Name.php", { dog_Name: dog_Name });
    }
    const breed = $("input#breed").val();
    if ($.trim(breed) !== " ") {
      $.post("ajax/breed.php", { breed: breed });
    }
    const owner_Name = $("input#owner_Name").val();
    if ($.trim(owner_Name) !== " ") {
      $.post("ajax/owner_Name.php", { owner_Name: owner_Name });
    }
    const dog_info = $("input#dog_info").val();
    $.post("ajax/dog_info.php", { dog_info: dog_info });
    if ($("#long_walk").attr("checked")) {
      $.post("ajax/long_walk.php", { long_walk: true });
    } else {
      $.post("ajax/long_walk.php", { long_walk: false });
    }
    const address = $("input#address").val();
    //Script for owner address
    const phone_number = $("input#phone_number").val();
    //Script for phone number
    const extra_notes = $("input#extra_notes").val();
    //Script for recording extra notes
    const stage = 0;
    // starting stage is 0, verify if this syntax is correct
    const assigned_walker = 0;
    // assigned walker is default 0
    $(".addForm").addClass("hidePage");
  });

  // Start our server so that it can begin listening to client requests.
  // Log (server-side) when our server has started
  app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`)
  );
});