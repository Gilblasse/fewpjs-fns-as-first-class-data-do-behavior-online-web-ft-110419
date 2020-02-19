/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */
function greet(stringTime) {
  num = parseInt(stringTime.split(":")[0]);
  switch(num) {
    case num < 12
         "Good Morning";
        break;
    case num > 12 && num < 17
        "Good Afternoon";
        break;
    default:
        "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(stringTime) {
  debugger;
}