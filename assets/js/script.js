$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

$('.saveBtn').on("click", function(){

    var input = $(this).siblings(".description").val();
    var keyTime = $(this).parent().attr("id");

    localStorage.setItem(keyTime, input);

})

// for (let i = 0; i < 9; i++) {
//     i = i + 9
//     console.log(i+"First")
//     let timeString = i.toString();
//     $("#9 .description").val(localStorage.getItem(9))
//     console.log(localStorage.getItem(i.toString()))
//     i = i - 9
//     console.log(i+"Second")
// }
// var i = 9
// $(".description").each(function(){
//     var blockNumber = $(this).parent().attr("id");
//     //blockNumber.val(localStorage.getItem(i));
//     console.log(i)
//     i++
// })
$("#9 .description").val(localStorage.getItem('9'));
$("#10 .description").val(localStorage.getItem('10'));
$("#11 .description").val(localStorage.getItem('11'));
$("#12 .description").val(localStorage.getItem('12'));
$("#13 .description").val(localStorage.getItem('13'));
$("#14 .description").val(localStorage.getItem('14'));
$("#15 .description").val(localStorage.getItem('15'));
$("#16 .description").val(localStorage.getItem('16'));
$("#17 .description").val(localStorage.getItem('17'));
function ppfTrack() {
    var currentHour = moment().hour();

    $(".time-block").each(function(){
        var blockTime = parseInt($(this).attr("id"));
        console.log(this);
        if (currentHour < blockTime) {
            $(this).addClass("future")
            $(this).removeClass("present")
            $(this).removeClass("past")
        } else if(currentHour === blockTime){
            $(this).removeClass("future")
            $(this).addClass("present")
            $(this).removeClass("past")
        } else {
            $(this).removeClass("future")
            $(this).removeClass("present")
            $(this).addClass("past")
        }
    })
}
ppfTrack();