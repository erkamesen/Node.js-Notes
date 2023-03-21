                                    /*  - - - - - - - EXAMPLE - - - - - - - - - */

//! Task 1
/* 
Define a function that takes 2 parameters. Let the first parameter take a number and return true
if the number is even and false if odd. Let the second parameter be a function and this function
 takes the parameter true or false and writes true to the console, double if false, odd.
*/


function evenOrOdd(bool){
    if(bool) console.log("Even")
    else console.log("Odd")
}

function control(num, func){
    var ct
    if(num%2==0) ct = true
    else ct = false
    func(ct)
}

control(5, evenOrOdd)
// Odd


control(12, evenOrOdd)
// Even

//! Task 2

/* 
Design a recursive function that calculates the factorial of the number given as a parameter.
*/

function factorial(num) {
    if(num==0) return 1
    else{
        return num* factorial(num-1)
    }
}


console.log(factorial(5))
// 120