                                    /*  - - - - - - - OOP - - - - - - - - - */

console.log("------------".repeat(3))

// objects

var user_id = "41218924891"
var data = {"name": "Muzaffer", "age":63}


var users = {
    "1231651212": {"name": "Erkam", "age":28},
    "1231251233": {"name": "Ensar", "age":24},
    "1231252334": {"name": "Furkan", "age":34},
    [user_id]:data

}


console.log(users)
/* 
{
  '1231251233': { name: 'Ensar', age: 24 },
  '1231252334': { name: 'Furkan', age: 34 },
  '1231651212': { name: 'Erkam', age: 28 },
  '41218924891': { name: 'Muzaffer', age: 63 }
}
*/

console.log("------------".repeat(3))


var data = {
    "name": "Erkam",
    "adress": {
        "street":"xyz",
        "no":"12"
    }
}


console.log(data.adress.street)
// xyz

console.log(data.x)
// undefined

// console.log(data.x.y)
/* 
TypeError: Cannot read property 'y' of undefined
    at Object.<anonymous> (/home/erkam/Files/Nodejs/Nodejs - JS Guide/OOP2_.js:45:20)
    at Module._compile (internal/modules/cjs/loader.js:999:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at internal/main/run_main_module.js:17:47
*/

console.log("------------".repeat(3))

var data = [["name", "Erkam"], ["age", 28]]

var object = Object.fromEntries(data)
console.log(object)
// { name: 'Erkam', age: 28 }

console.log("------------".repeat(3))


var data1 = {"name":"Erkam"}
var data2 = {"name":"Ali", "age":28}

var result = {...data1, ...data2}
console.log(result)
// { name: 'Ali', age: 28 }


var result = Object.assign(data2, data1)
console.log(result)
// { name: 'Erkam', age: 28 }

console.log("------------".repeat(3))

//! Mutable - Immutable

/* 
number - string -> immutable

*/

var a = "test"

console.log(a.length)
// 4

var b = [1,2,3]

console.log(b.length)
// 3

a.length = 5
console.log(a.length)
// 4

b.length = 5
console.log(b.length)
// 5


// preventExtensions

var newData = {
    "name":"Ensar",
    "age":24
}

Object.preventExtensions(newData)
newData.x = 5




console.log("------------".repeat(3))