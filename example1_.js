                                    /*  - - - - - - - EXAMPLE - - - - - - - - - */

/* 
1. Define 3 variables that hold the values ​​of "bread", "apple", "cake".. take the first 3 letters of each word and join them with a "-" sign.
Expected result: bre-app-cak

2. Define a variable that hold the any number. example = 3  and check if a Number is Odd or Even.

3.  Defina a variable that hold the any number for find a week day. Use switch-case
*/



// ! 1.

var v1 = "bread"
var v2 = "apple"
var v3 = "cake"

result = `${v1.slice(0,3)}-${v2.slice(0,3)}-${v3.slice(0,3)}`
console.log(result)
// bre-app-cak


// ! 2.

var num = 14
var result = (num%2==0)? "Even":"Odd"
console.log(result)
// Even

// ! 3.

var week_day = 12
var expression = (week_day%7==0) ? 7:week_day%7

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
console.log(day)

// Friday