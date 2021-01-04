$(document).ready(function() {
    // GIVEN I am using a daily planner to create a schedule
    // WHEN I open the planner
    // THEN the current day is displayed at the top of the calendar
    //IF DAY MATCHES TODAYS DATE, DISPLAY CURRENT DAY TIME BLOCKS, AND CLEAR PREVIOUS DAY 
    // WHEN I scroll down
    // THEN I am presented with time blocks for standard business hours
    // WHEN I view the time blocks for that day
    // THEN each time block is color-coded to indicate whether it is in the past, present, or future
    //WILL NEED 3 IF STATEMENTS. IF THE TIME IS PAST, COLOR, IF THE TIME IS CURRENT COLOR DIFFERENT, IF THE TIME IS FUTURE COLOR DIFFERENT
    // WHEN I click into a time block
    // THEN I can enter an event
    // WHEN I click the save button for that time block
    // THEN the text for that event is saved in local storage
    // WHEN I refresh the page
    // THEN the saved events persist
    var schedule = [];
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    var Input = $(".container");
    Input.append("<div>" + time + "</div>");
});