// Moment to get current day to be display at the top of page
var currentDay = moment().format("dddd MMMM Do");
    $("#currentDay").text(currentDay);

// Click funtion to save users task for the hour
$(".saveBtn").on("click", function() {
    var userToDo = $("#" + timeClock + "-toDO").val()
    var timeClock = $(this).attr("id").split("-")[0]
    localStorage.setItem(timeClock, userToDo)
});

// Moment to get current hour
var currentTime = moment().hour()

// Loop through the text areas and add the stuff saved on local storage
for ( let i = 9; i <= 17; i++) {
    $("#" + i + "-toDO").val(localStorage.getItem(i))
    if (i < currentTime) {
        $("#" + i + "-toDO").addClass("past")
    } else if ( i > currentTime) {
        $("#" + i + "-toDO").addClass("future")
    } else {
        $("#" + i + "-toDO").addClass("present")
    }
}  