$(document).ready(function() {
    
    //IF DAY MATCHES TODAYS DATE, DISPLAY CURRENT DAY TIME BLOCKS, AND CLEAR PREVIOUS DAY 
    
    // WHEN I view the time blocks for that day
    // THEN each time block is color-coded to indicate whether it is in the past, present, or future
    //WILL NEED 3 IF STATEMENTS. IF THE TIME IS PAST, COLOR, IF THE TIME IS CURRENT COLOR DIFFERENT, IF THE TIME IS FUTURE COLOR DIFFERENT
    
    // WHEN I click the save button for that time block
    // THEN the text for that event is saved in local storage
    //RETURN VALUE OF EACH TIME ELEMENT 
    // WHEN I refresh the page
    // THEN the saved events persist
    // var schedule = [];
    // get and display the time and date

    //clear the tasks if it is a new day
    if (time === today) {
        console.log("it is today");
    };
    //run function of storing task to localstorage by clicking the save button
    $(".saveBtn").on("click",() => storeTasks());

    //set the time variables 
    var nineamEL = document.getElementById("9");
    var tenamEL = document.getElementById("10");
    var elevenamEL = document.getElementById("11");
    var twelveamEL = document.getElementById("12");
    var onepmEL = document.getElementById("13");
    var twopmEL = document.getElementById("14");
    var threepmEL = document.getElementById("15");
    var fourpmEL = document.getElementById("16");
    // var time = document.getElementsByClassName("17")

    var workhours =[nineamEL, tenamEL, elevenamEL, twelveamEL, onepmEL, twopmEL, threepmEL, fourpmEL];

    for (let i = 0; i < workhours.length; i++) {
        const element = workhours[i];
        console.log(element.classList);
        // console.log(element.classList.split(" "));
        let id = $(element).attr("id");
        console.log(id);
        if (parseInt(id) < moment().hour()) {
            $(element).addClass("past");
            console.log("If " + element.classList);
        }
        else if (parseInt(id) > moment().hour()) {
            $(element).addClass("future");
            console.log("else if " + element.classList);
        }
        else {$(element).addClass("present")};
        console.log("else" + element.classList);
    }

    // set past, current, and present class
    

    //display the current time 
    var time = moment().format('MMMM Do YYYY, h:mm:ss a')
    var currentDay = $("#currentDay");
    currentDay.text(time);
    var today = new Date();
    console.log(today);

    //use setinterval function to reset time every second
    setInterval(function() {
        time = moment().format('MMMM Do YYYY, h:mm:ss a')
        currentDay.text(time);

    },1000
    );

    //create a function to store tasks in local storage, to be called when clicking the save button
    function storeTasks() {
        console.log(nineamEL.value);
        localStorage.setItem("task", JSON.stringify(nineamEL.value)
        )}
    //need a for loop to go through each timeEL and save the value to local storage
    
});