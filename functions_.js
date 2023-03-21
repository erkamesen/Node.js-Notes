                                    /*  - - - - - - - FUNCTIONS - - - - - - - - - */

// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).

/* 
   - Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  return p1 * p2;
}
*/

//! Syntax
/* 
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}

*/

/* 
function name(parameter1, parameter2, parameter3) {
    code to be executed
}
*/

console.log("------------".repeat(3))


function test(){
    console.log("test")
}

console.log(test)
// [Function: test]

test()
// test
test()
// test

console.log("------------".repeat(3))

// Parameter

function square(n){
    console.log(n*n)
}


square(5)
square(10)
// 25
// 100

function square(n){
    return n**2
}

console.log(square(235))
// 55225
console.log(square(123))
// 15129


console.log("------------".repeat(3))

// Parameters

function sum(n1, n2){
    return n1 + n2
}


console.log(sum(23, 12))
// 35

console.log("------------".repeat(3))

// Default 

function multiply(n1=15, n2=5){
    return Number(n1)*Number(n2)
}

console.log(multiply())
// 75

console.log("------------".repeat(3))

// use return like break statement


function test(){
    console.log(1)
    console.log(2)
    return 3
    console.log(4) 
    console.log(5)
}

console.log(test())
/* 
1
2
3
*/

console.log("------------".repeat(3))


var square = function(n){
    return n**2
}

console.log(square(2))
// 4


console.log("------------".repeat(3))



var square = (n) => {
    return n**2
}

console.log(square(4))
// 16


var test = a => {
    console.log(a)
}

test(3)


