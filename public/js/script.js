/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
$(document).ready(() => {
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
    // if ((formDisplay = false)) {
    //   DisplayForm();
    //   HideClients();
    //   formDisplay = true;
    // } else {
    //   HideForm();
    //   formDisplay = false;
    // }
  }

  function ClientBtn() {
    console.log("hit view clients button");
    $(".homePage").addClass("hidePage");
    $(".dogBox").removeClass("hidePage");
    $(".viewClients").hide();
    $(".viewHome").show();
    //if ((formDisplay = false)) {
    //   viewClients();
    //   HideForm();
    //   formDisplay = true;
    // } else {
    //   HideClients();
    //   formDisplay = false;
    // }
  }

  $(".addDogButton").click(FormBtn);
  $(".viewClients").click(ClientBtn);
  $(".exit").click(HideForm);
  $(".viewHome").click(HideClients);

  //submit new dog
  $("input#newDog").on("click", () => {
    //pull data from form
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
    // Store new dog data
    $.post("api/dogs", {
      type: "PUT",
      data: newDog
    });
    $(".addForm").addClass("hidePage");
  });

  let newStage = 1;

  function stageLoop() {
    const stage = $(this).data("newStage");
    // Loop stages
    /*eslint indent: [3, 9, {"SwitchCase": 1}]*/
    switch (stage) {
      case 1:
        newStage = 2;
        break;
      case 2:
        newStage = 3;
        break;
      case 3:
        newStage = 1;
    }
  }

  $(".changeWalkState").on("click", event => {
    const id = $(this).data("id");
    stageLoop();
    //send the put request
    $.ajax("/api/dogs/" + id, {
      type: "PUT",
      data: newDog
    }).then(() => {
      console.log("Changed stage to ", newStage);
      location.reload();
    });

    console.log({ id });
    console.log({ newStage });
  });
});
