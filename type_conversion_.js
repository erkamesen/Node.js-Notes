                                    /*  - - - - - - - TYPE CONVERSION - - - - - - - - - */

var a = "17" // string
var b = 3 // integer - number

// console.log(a+b)
// 173

/* String => Integer */


var a = "3.14";
var result = parseInt(a)

// parseInt() for take number s integer part

// console.log(result)

var a = "3";
// console.log(parseFloat(a))
// 3
//console.log(Number(a))
// 3

var a = "test"

// console.log(Number(a))
// NaN => Not a Number

// console.log(Number(null))
// 0
// console.log(Number(true))
// 1
// console.log(Number(undefined))
// NaN
// console.log(Number(false))
// 0

/* .. => to String */

var a = 15;

// console.log(String(a))
// 15 

// console.log(typeof String(a))
// string

// console.log(String(null))
// null => its not null its string.

// console.log(String(undefined))
// udefined => its not undefined its string.


// console.log(a.toString())
// 15

// console.log(typeof a.toString())
// string

// console.log(typeof true.toString())
// string


// console.log(3 + null)
// 3 - Number

// console.log(3 + undefined)
// NaN


// console.log("3" + null)
// 3null

// console.log("3" + undefined)
// 3undefined

// console.log("3" + 2)
// 32

// console.log("3" -2)
// 1

// JS always converts numbers to string for addition process but for other operations ( - / *) converts strings to number.