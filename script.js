// This section defines all VARIABLES going to be used within the function for adding data to local storage
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


// Function for setting colors assigned to hours of day within scheduler, using jQuery
$(function () {
    // Adds current day to currentDay Head, uses moment js to pull date and time script and set the element for current day
    var currentdayEl = $("#currentDay");
    currentdayEl.text(moment().format("MMMM Do YYYY, h:mm a"));
    var currentHourTime = parseInt(moment().format('k'));


    // Change color with a for loop, looping through each of the section blocks (9AM-5PM blocks, sequential count to only include work hours.)
    // and setting appropriate color based on time of day (with row block past, present and future)
    for (var hourCount = 9; hourCount < 18; hourCount++) {
        var hourgrabEl = $("#hour-" + hourCount);
        if (hourCount < currentHourTime) {
            hourgrabEl.attr("class", "row time-block past");
        }
        else if (hourCount === currentHourTime) {
            hourgrabEl.attr("class", "row time-block present");
        }
        else {
            hourgrabEl.attr("class", "row time-block future");
        }
    }


    // Creates and calls init function using JSON to parse data into local storage, and then pulls the data value from storage when recalled
    function initPage() {
        var init9 = JSON.parse(localStorage.getItem("9AM"));
        nineAm.val(init9);
        // Parses each of the data elements into local storage to be retrieved upon recall
        var init10 = JSON.parse(localStorage.getItem("10AM"));
        tenAm.val(init10);
        var init11 = JSON.parse(localStorage.getItem("11AM"));
        elevenAm.val(init11);
        var init12 = JSON.parse(localStorage.getItem("12PM"));
        twelvePm.val(init12);
        var init13 = JSON.parse(localStorage.getItem("1PM"));
        onePm.val(init13);
        var init14 = JSON.parse(localStorage.getItem("2PM"));
        twoPm.val(init14);
        var init15 = JSON.parse(localStorage.getItem("3PM"));
        threePm.val(init15);
        var init16 = JSON.parse(localStorage.getItem("4PM"));
        fourPm.val(init16);
        var init17 = JSON.parse(localStorage.getItem("5PM"));
        fivePm.val(init17);
    }
    initPage();




    // Creates a save button function assigned to the buttons on the HTML, where if the used clicks save it will save the data to local storage
    $(".saveBtn").on("click", function () {
        userInput = $(this).siblings(".description").val().trim();
        // sets text of hour span to update the text within .hour class   
        hourSpan = $(this).siblings(".hour").text().trim();
        // sets item to local storage using JSON and stringify   
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
    })
})