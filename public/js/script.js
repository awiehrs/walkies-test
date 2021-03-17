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
    const dog_Name = $("input#dog_Name").val();
    const breed = $("input#breed").val();
    const owner_Name = $("input#owner_Name").val();
    const dog_info = $("input#dog_info").val();
    const address = $("input#address").val();
    const extra_notes = $("input#extra_notes").val();
    const phone_number = new Cleave("input#phone_number", {
      phone: true,
      phoneRegionCode: "{country}"
    });

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
    const stage = $(this).data("newStage");
    // Loop stages
    /*eslint indent: [3, 9, {"SwitchCase": 1}]*/
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
    const id = $(this).data("id");
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
