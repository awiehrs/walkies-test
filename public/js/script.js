/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
$(document).ready(() => {
  // Display current date
  const todayDisplay = moment().format("ddd[ - ] MMMM Do[,] YYYY");
  console.log(todayDisplay);
  $("#currentDay").text(todayDisplay);

  $(".viewHome").hide();
  // Use Handlebars to render the main index.html page with the movies in it.
  const formDisplay = false;
  const clientsDisplay = false;

  // Button functions
  function viewClients() {
    console.log("hide homepage");
    $(".homePage").addClass("hidePage");
    $(".dogBox").removeClass("hidePage");
    // Add script to change text on button from "View Client List" to "View Home Page" or make a second button for view home appear
  }

  function HideClients() {
    $(".homePage").removeClass("hidePage");
    $(".dogBox").addClass("hidePage");
    $(".viewHome").hide();
    $(".viewClients").show();
    // Add script to change text on button from "View Client List" to "View Home Page" or make a second button for view home appear
  }

  function DisplayForm() {
    $(".addForm").removeClass("hidePage");
    $(".dogBox").addClass("hidePage");
  }

  function HideForm() {
    $(".addForm").addClass("hidePage");
    $(".dogBox").removeClass("hidePage");
    $(".bottomPaws").show();
  }

  function FormBtn() {
    $(".addForm").removeClass("hidePage");
    $(".dogBox").addClass("hidePage");
    $(".bottomPaws").hide();
  }

  function ClientBtn() {
    console.log("hit view clients button");
    $(".homePage").addClass("hidePage");
    $(".dogBox").removeClass("hidePage");
    $(".viewClients").hide();
    $(".viewHome").show();
  }

  $(".addDogButton").click(FormBtn);
  $(".viewClients").click(ClientBtn);
  $(".exit").click(HideForm);
  $(".viewHome").click(HideClients);

  // Add a new dog to DataBase
  $(".addDog").on("submit", e => {
    e.preventDefault();

    // Get data from Form
    const newDog = {
      json_string: JSON.stringify({
        dog_Name: $("input#dog_Name").val(),
        breed: $("input#breed").val(),
        owner_Name: $("input#dog_info").val(),
        dog_info: $("input#dog_info").val(),
        address: $("input#address").val(),
        phone_number: new Cleave("input#phone_number", {
          phone: true,
          phoneRegionCode: "{country}"
        }),
        extra_notes: $("input#extra_notes").val(),
        stage: 1,
        assigned_walker: $("input#assigned_walker").val()
      })
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newDog
    }).then(() => {
      location.reload();
    });
    $(".addForm").addClass("hidePage");
  });

  // Set needsWalk to True
  $(".walkbtn").on("click", function(e) {
    e.preventDefault();
    const id = $(this).data("id");
    

    // Send the PUT request.
    $.ajax("/api/dogs/" + id, {
      type: "PUT",
      data: { needswalk: true }
    }).then(() => {
      location.reload();
    });
  });

  // Set needsWalk to False
  $(".donebtn").on("click", function(e) {
    e.preventDefault();
    const id = $(this).data("id");
    
    // Send the PUT request.
    $.ajax("/api/dogs/" + id, {
      type: "PUT",
      data: { needswalk: false }
    }).then(() => {
      location.reload();
    });
  });
});
