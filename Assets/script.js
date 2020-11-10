console.log("hi")
var currentDay = moment().format("dddd MMMM Do");
    $("#currentDay").text(currentDay);

$(".saveBtn").on("click", function() {
    var timeClock = $(this).attr("id").split("-")[0]
    var userToDo = $("#" + timeClock + "-toDO").val()
    console.log(timeClock, userToDo)
    localStorage.setItem(timeClock, userToDo)
});

for ( let i = 9; i <= 17; i++) {
    $("#" + i + "-toDO").val(localStorage.getItem(i))
}