                                    /*  - - - - - - - FUNCTIONS - - - - - - - - - */

console.log("------------".repeat(3))

function localScope() {
    var a = 3 
    console.log(a)
}

localScope()
// 3

//! console.log(a)
/* 
console.log(a)
            ^

ReferenceError: a is not defined
    at Object.<anonymous> (/home/erkam/Files/Nodejs/Nodejs - JS Guide/functions2_.js:13:13)
    at Module._compile (internal/modules/cjs/loader.js:999:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at internal/main/run_main_module.js:17:47
*/


function test(x) {
    console.log(x)
}


test(6,4,5,1,2,12,8) // multiple arguments
// 6


function test2(x) {
    console.log(arguments)
}

test2(6,4,5,1,2,12,8)
// [Arguments] { '0': 6, '1': 4, '2': 5, '3': 1, '4': 2, '5': 12, '6': 8 }


function test3(...x) {
    console.log(x)
}

test3(6,4,5,1,2,12,8)
// [Arguments] { '0': 6, '1': 4, '2': 5, '3': 1, '4': 2, '5': 12, '6': 8 }

/* 
[
  6,  4, 5, 1,
  2, 12, 8
]
*/

console.log("------------".repeat(3))

//! Recursive

function recursive (x){
    console.log(x)
    if(x>0) recursive(x-1)
}

recursive(10)
/* 
10
9
8
7
6
5
4
3
2
1
0
*/

//! Callback Functions

function square(n){
    return n**2
}

function test4(func){
    console.log("test")
    var result = func(2)
    console.log(result)
}

test4(square)
// test
// 4

console.log("------------".repeat(3))

// Nested Functions

function test5() {
    console.log("Test5 function is running")
    var a = 1
    function nest_function(){
        console.log("Nest Function is running")
        var b = 2
        console.log(a, b)
    }
    nest_function()
}

test5()
// Test5 function is running
// Nest Function is running
// 1 2

//! nest_function()
/* 
ReferenceError: nest_function is not defined
    at Object.<anonymous> (/home/erkam/Files/Nodejs/Nodejs - JS Guide/functions2_.js:116:1)
    at Module._compile (internal/modules/cjs/loader.js:999:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at internal/main/run_main_module.js:17:47
*/

