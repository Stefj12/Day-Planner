console.log(moment().format("dddd, MMMM, Do"));
$("#currentDay").text(moment().format("dddd, MMMM, Do"))

// on click of save
$(".saveBtn").on("click", function () {

    var time = $(this).siblings(".hour").text().trim();
    console.log("click save button" + time);
    var desc = $(this).siblings(".desc").val();
    console.log(desc);
    localStorage.setItem(time, desc);


});

// loading data
// console.log(localStorage.getItem("9 AM"));
$(".desc").val(localStorage.getItem("9 AM"));
$("#10 AM").val(localStorage.getItem("10 AM"));
$("#12 AM").val(localStorage.getItem("12 AM"));
$("#1 PM").val(localStorage.getItem("1 PM"));
$("#2 PM").val(localStorage.getItem("2 PM"));
$("#3 PM").val(localStorage.getItem("3 PM"));
$("#4 PM").val(localStorage.getItem("4 PM"));
$("#5 PM").val(localStorage.getItem("5 PM"));

//Loop through all desc elemnts in the browser 
$(".time-block").each(function(){
 var hour = $(this).children(".hour").text().trim();
 console.log(hour); 
 $(".desc").val(localStorage.getItem("9 AM"))
}

)