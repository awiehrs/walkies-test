/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
$(document).ready(() => {
  const todayDisplay = moment().format("ddd[ - ] MMMM Do[,] YYYY");
  console.log(todayDisplay);
  $("#currentDay").text(todayDisplay);

  // Button functions
  function viewClients(e) {
    e.preventDefault();
    $(".homePage").addClass("hidePage");
    $(".dogBox").removeClass("hidePage");
    // Add script to change text on button from "View Client List" to "View Home Page" or make a second button for view home appear
  }

  function addFormDisplay(e) {
    e.preventDefault();
    $(".addForm").removeClass("hidePage");
    $(".dogBox").addClass("hidePage");
  }

  $(".addDogButton").click(addFormDisplay);
  $(".topBtn").click(viewClients);

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
        assigned_walker: assigned_walker,
        address: address,
        phone_number: phone_number,
        extra_notes: extra_notes,
        stage: stage,
        assigned_walker: assigned_walker
      })
    });
    $(".addForm").addClass("hidePage");
  });

  $(".changeWalkState").on("click", function(event) {
    const id = $(this).data("id");
    const stage = $(this).data("newStage");
    const newStage = 1;

    // Loop stages
    switch (stage) {
      case 1:
        // code block
        newStage = 2;
        break;
      case 2:
        // code block
        newStage = 3;
        break;
      case 3:
        // code block
        newStage = 1;
    }
    
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
