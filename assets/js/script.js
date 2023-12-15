// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $('#currentDay');
var currentTime = dayjs().hour()
var timeBlock = $('.time-block');
// Create variables for each hour within the HTML
var hour9 = $('#9');
var hour10 = $('#10');
var hour11 = $('#11');
var hour12 = $('#12');
var hour13 = $('#13');
var hour14 = $('#14');
var hour15 = $('#15');
var hour16 = $('#16');
var hour17 = $('#17');

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
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
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // Add code to display the current date in the header of the page.
  var today = dayjs();
  currentDay.text(today.format('dddd, MMMM D, YYYY'));
});