//render current date- d/m/y
$('#currentDay').text(moment().format('dddd, MMMM Do'));

//makes function available after doc loads, uses jquery
$(document).ready(function(){
    $('.saveBtn').on('click', function(){
        var type = $(this). siblings('.description').val();

        //saves user input to local storage
        localStorage.setItem(time, text);
    })

    function colorChange(){
        var currentTime = moment().hours();

        $('.conatiner-row').each(function(){
            var scheduleHour = pareInt ($(this).attr('id'));

            if (scheduleHour <currentTime){
                $(this).addClass('past');
            } else if (scheduleHour === currentTime){
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).removeClass('future');
            }
        })
    }
    colorChange();

});
