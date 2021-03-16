$(document).ready(() => {
  const todayDisplay = moment().format("ddd[ - ] MMMM Do[,] YYYY");
  console.log(todayDisplay);
  $("#currentDay").text(todayDisplay);

  $("input#newDog").on("click", () => {
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


