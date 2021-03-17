/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
$(document).ready(() => {
  const todayDisplay = moment().format("ddd[ - ] MMMM Do[,] YYYY");
  console.log(todayDisplay);
  $("#currentDay").text(todayDisplay);

  // Use Handlebars to render the main index.html page with the movies in it.
  let formDisplay = false;
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
    // Add script to change text on button from "View Client List" to "View Home Page" or make a second button for view home appear
  }

  function DisplayForm() {
    $(".addForm").removeClass("hidePage");
    $(".dogBox").addClass("hidePage");
  }

  function HideForm() {
    $(".addForm").addClass("hidePage");
    $(".dogBox").removeClass("hidePage");
  }

  function FormBtn() {
    if ((formDisplay = false)) {
      DisplayForm();
      formDisplay = true;
    } else {
      HideForm();
      formDisplay = false;
    }
  }

  function ClientBtn() {
    if ((formDisplay = false)) {
      viewClients();
      formDisplay = true;
    } else {
      HideClients();
      formDisplay = false;
    }
  }

  $(".addDogButton").click(FormBtn);
  $(".topBtn").click(ClientBtn);

  //submit new dog
  $("input#newDog").on("click", () => {
    //pull data from form
    const dog_Name = $("input#dog_Name").val();
    const breed = $("input#breed").val();
    const owner_Name = $("input#owner_Name").val();
    const dog_info = $("input#dog_info").val();
    const address = $("input#address").val();
    const phone_number = $("input#phone_number").val();
    const extra_notes = $("input#extra_notes").val();

    // Store new dog data
    $.post("api/dogs", {
      json_string: JSON.stringify({
        dog_Name: dog_Name,
        breed: breed,
        owner_Name: owner_Name,
        dog_info: dog_info,
        address: address,
        phone_number: phone_number,
        extra_notes: extra_notes,
        stage: "A",
        assigned_walker: null
      })
    });
    $(".addForm").addClass("hidePage");
  });

  let newStage = "A";

  function stageLoop() {
    const id = $(this).data("id");
    const stage = $(this).data("newStage");
    // Loop stages
    switch (stage) {
      case "A":
        newStage = "B";
        break;
      case "B":
        newStage = "C";
        break;
      case "C":
        newStage = "A";
    }
  }

  $(".changeWalkState").on("click", event => {
    stageLoop();
    //send the put request
    $.ajax("/api/dogs/" + id, {
      type: "PUT"
    }).then(() => {
      console.log("Changed stage to ", newStage);
      location.reload();
    });

    console.log({ id });
    console.log({ newStage });
  });
});
