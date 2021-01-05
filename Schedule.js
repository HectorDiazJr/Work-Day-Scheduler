$(document).ready(function() {
    // GIVEN I am using a daily planner to create a schedule
    // WHEN I open the planner
    // -THEN the current day is displayed at the top of the calendar
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
    // var schedule = [];
    // get and display the time and date
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    var currentDay = $("#currentDay");
    currentDay.text(time);

    //make text field to allow user to input a task

    //create a save button to go in each ul
    //use class saveBtn 
    //use class saveBtn i:hover when hovering over
    // var button =documenet.createElement("button");
    // button.textContent = "Save";
    // ul.appendChild(button);
    // $(".time").appendChild(li);

    //when save button is click, save task to local storage
    //use json to stringify stored items 
    //.setItem("text box", JSON.stringify)

    //use if statement to compare actual time of day with time block
    //if past use class past to style text box
    //if present use class present to style text box
    //if future use class future to style text box

    //get stored task from local storage
    //parse the json string to an object
    //JSON.parse(localStorage.getItem("place in the text box"))

    //clear the text boxes with tasks each new day

});