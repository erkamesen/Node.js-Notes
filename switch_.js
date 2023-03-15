/*  - - - - - - - SWITCH CASE - - - - - - - - - */

// ! Use the switch statement to select one of many code blocks to be executed.

/*  Syntax
switch(expression) {
  case x:
    code block
    break;
  case y:
    code block
    break;
  default:
    code block
} 
*/

var input = 20; // take users input 
var expression = (input%7 == 0) ? 7 : input%7

var day
switch (expression) {   
    case 1:
        day = "Monday"; break
    case 2:
        day = "Tuesday"; break
    case 3:
        day = "Wednesday"; break
    case 4:
        day ="Thursday"; break
    case 5:
        day = "Friday"; break
    case 6:
    case 7:
        day = "Weekend"; break
    default:
        day = "Unknown"; break
}   

console.log(`Today is ${day}`)
// Today is Weekend

