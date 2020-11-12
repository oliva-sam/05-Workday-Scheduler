var currentDay = moment().format("dddd MMMM Do");
    $("#currentDay").text(currentDay);

$(".saveBtn").on("click", function() {
    var timeClock = $(this).attr("id").split("-")[0]
    var userToDo = $("#" + timeClock + "-toDO").val()
    localStorage.setItem(timeClock, userToDo)
});

var currentTime = moment().hour()

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