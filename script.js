// This section defines all VARIABLES going to be used
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var hourSpan;
var userInput;


// Function for setting colors assigned to hours of day within scheduler
$(function () {
    // Adds current day to currentDay id in HTML, uses moment js to pull date and time script and set the element for current day
    var currentdayEl = $("#currentDay");
    currentdayEl.text(moment().format("MMMM Do YYYY, h:mm a"));
    var currentHourTime = parseInt(moment().format('k'));
    console.log(currentdayEl);


    // Change color with a for loop, looping through each of the section blocks (9AM-5PM blocks)
    // and setting appropriate color based on time of day (with row block past, present and future)
    for (var hourCount = 9; hourCount < 18; hourCount++) {
        var hourgrabEl = $("#hour-" + hourCount);
        if(hourCount < currentHourTime) {
            hourgrabEl.attr("class","row time-block past");
        }
        else if(hourCount === currentHourTime) {
            hourgrabEl.attr("class","row time-block present");
        }
        else {
            hourgrabEl.attr("class","row time-block future");
        }
    }

}