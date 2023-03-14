                                    /*  - - - - - - - IF / ELSE / ELSE IF STATEMENTS - - - - - - - - - */


/* 
Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
*/

// ! if syntax
/* 
if (condition) {
    block of code to be executed if the condition is true
} 
*/


// ! else syntax
/* 
if (condition) {
    block of code to be executed if the condition is true
} else {
    block of code to be executed if the condition is false
}
*/

// ! else if syntax
/* 
if (condition1) {
    block of code to be executed if condition1 is true
} else if (condition2) {
    block of code to be executed if the condition1 is false and condition2 is true
} else {
    block of code to be executed if the condition1 is false and condition2 is false
}
*/

var age = 18;

if( age >= 18){
    console.log("You can enter")
}
// You can enter

age = 15;

if( age >= 18){
    console.log("You can enter")
}
// its not run

console.log("------------".repeat(3)) 

if( age >= 18){
    console.log("You can enter")
}else if( age<18 ){
    console.log("You can not enter")
}
// You can not enter

console.log("------------".repeat(3))

var money = 500

if(money > 1000){
    console.log("You re rich boi")
} else if(money >500){
    console.log("i think thats okay")
} else{
    console.log("poor ronaldo :(")
}
// poor ronaldo :(

// ! Single line if else if else conditions

console.log("------------".repeat(3))

if(money > 1000) console.log("You re rich boi")
else if(money >500)  console.log("i think thats okay")
else console.log("poor ronaldo :(")
// poor ronaldo :(

// ! Single line if else conditions
age = 18;
var response = (age >= 18) ? "You can enter" : "You can not enter" // * ES6
console.log(response)
// You can enter

console.log("------------".repeat(3))

/*  Falsy Values */

/* 
if (false) {
    Not reachable
}

if (null) {
    Not reachable
}

if (undefined) {
    Not reachable
}

if (0) {
    Not reachable
}

if (-0) {
    Not reachable
}

if (0n) {
    Not reachable
}

if (NaN) {
    Not reachable
}

if ("") {
    Not reachable
}

*/

console.log("------------".repeat(3))

/* Trutht Values */

/* 
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)

*/

