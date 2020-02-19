/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */
function greet(stringTime) {
  const num = parseInt(stringTime.split(":")[0]);
  let sen;
  switch(num) {
    case num < 12:
         sen = "Good Morning";
        break;
    case num > 12 && num < 17:
        sen = "Good Afternoon";
        break;
    default:
        sen = "Good Evening";
  }
  return sen;
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  debugger;
}