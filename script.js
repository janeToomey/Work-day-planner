//render current date- d/m/y
$('#currentDay').text(moment().format('dddd, MMMM Do YYYY, h:mm'));

//makes function available after doc loads, uses jquery
$(document).ready(function(){
    colorChange();
    makeText();
    });

    function colorChange(){
        var currentTime = moment().hours();
        console.log(" Current Time" + currentTime);

        $('.textArea').each(function(){
            var scheduleHour = parseInt($(this).attr('id'));
// how rows are determined to be past, present, or future
            if (currentTime > scheduleHour){
             $(this).removeClass("future");
             $(this).removeClass("present");
             $(this).addClass("past");
            } else if (currentTime < scheduleHour){
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            } else {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");  
            }
        });
    }
    //button click variables
    var text;
    var time;


    $(".saveBtn").click(function(){
        text = $(this).siblings(".input").val();
        console.log(text);
        time = $(this).siblings(".hour").text();
        console.log(time);
        localStorage.setItem(time, JSON.stringify(text));
    });
    //calls above colorChange function
    colorChange();
    makeText();





function makeText () {   
    var eventText9 = JSON.parse(localStorage.getItem("9AM"));
    $("#9").val("");
    $("#9").val(eventText9);

    var eventText10 = JSON.parse(localStorage.getItem("10AM"));
    $("#10").val("");
    $("#10").val(eventText10);
    
    var eventText11 = JSON.parse(localStorage.getItem("11AM"));
    $("#11").val("");
    $("#11").val(eventText11);
    
    var eventText12 = JSON.parse(localStorage.getItem("12PM"));
    $("#12").val("");
    $("#12").val(eventText12);
    
    var eventText1 = JSON.parse(localStorage.getItem("1PM"));
    $("#1").val("");
    $("#1").val(eventText1);
    
    var eventText2 = JSON.parse(localStorage.getItem("2PM"));
    $("#2").val("");
    $("#2").val(eventText2);

    var eventText3 = JSON.parse(localStorage.getItem("3PM"));
    $("#3").val("");
    $("#3").val(eventText3);

    var eventText4 = JSON.parse(localStorage.getItem("4PM"));
    $("#4").val("");
    $("#4").val(eventText4);

    var eventText5 = JSON.parse(localStorage.getItem("5PM"));
    $("#5").val("");
    $("#5").val(eventText5);

    
};


