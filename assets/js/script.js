// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $('#currentDay');
var currentTime = dayjs().hour()
var timeBlock = $('.time-block');
var saveButton = $('.saveBtn');

$(function () {
  // Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  saveButton.on('click', function () {
    // .each loop for the function to read each timeBlock instead of the first one over and over
    timeBlock.each(function() {
    var time = $(this).attr("id");
    var description = $(this).find('.description').val();
    localStorage.setItem(time, description);
    })
  });

  // Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
  // Use a .each loop to loop through each timeBlock's hour id
  timeBlock.each(function() {
    // ParseInt to turn each id into an integer for dayjs to read and compare the hours
    var time = parseInt($(this).attr("id"));
    // if, else if, and elses for applying the different classes for past, present, and future
    if (dayjs(currentTime).isSame(dayjs(time, 'hour'))) {
      $(this).addClass('present');
    } else if (dayjs(currentTime).isAfter(dayjs(time, 'hour'))) {
      $(this).addClass('past');
    } else {
      $(this).addClass('future');
    }
  })

  // Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  // Add code to display the current date in the header of the page.
  var today = dayjs();
  currentDay.text(today.format('dddd, MMMM D, YYYY'));
});