                                    /*  - - - - - - - OOP - - - - - - - - - */

console.log("------------".repeat(3))

//! Primitive types & Reference Types

/* 
The primitive types are boolean , byte , char , short , int , long , float and double .
All other types are reference types, so classes, which specify the types of objects,
are reference types. A primitive-type variable can store exactly one value of its declared type at a time.
*/

var a = 5
var b = a

console.log(a)
console.log(b)
// 5
// 5

b = 15

console.log(a)
console.log(b)
// 5
// 15

console.log("------------".repeat(3))

// Objects - Reference

var data = {
    "name":"erkam",
    "age":28
}

var data2 = data

data2.x = 15

console.log(data)
// { name: 'erkam', age: 28, x: 15 }

console.log(data2)
// { name: 'erkam', age: 28, x: 15 }

console.log(data == data2)
// true


// Spread syntac

var data3 = {...data}
data3.y= "Hello"

console.log(data)
console.log(data3)
// { name: 'erkam', age: 28, x: 15 }
// { name: 'erkam', age: 28, x: 15, y: 'Hello' }

console.log(data == data3)
// false


console.log("------------".repeat(3))

// Arrays - Reference 
var array1 = [1,2,3]
var array2 = array1

console.log(array1)
console.log(array2)
// [ 1, 2, 3 ]
// [ 1, 2, 3 ]


array2.push(4)

console.log(array1)
console.log(array2)
// [ 1, 2, 3, 4 ]
// [ 1, 2, 3, 4 ]


console.log("------------".repeat(3))


var data = {name:"erkam"}
var data2 = {name:"erkam"}

console.log(data == data2)
// false

console.log(JSON.stringify(data) == JSON.stringify(data2))
// true

/* 
'{name:"erkam"}' == '{name:"erkam"}' 
 */


console.log("------------".repeat(3))

//! Deep COPY !


var data = {name:"erkam",
            adress:{
                street:"xy",
                no:5
            }}


var data2 = {...data}

data2.name = "Mehmet"
data2.adress.street = "aa"


console.log(data)
// { name: 'erkam', adress: { street: 'aa', no: 5 } }

console.log(data2)
// { name: 'Mehmet', adress: { street: 'aa', no: 5 } }

//* adress key is reference types !! ( object in object)

var result = JSON.stringify(data2)

console.log(result)
console.log(typeof result)

// {"name":"Mehmet","adress":{"street":"aa","no":5}}
// string

result2 = JSON.parse(result)

console.log(result2)
console.log(typeof result2)

// { name: 'Mehmet', adress: { street: 'aa', no: 5 } }
// object

// - - - 

var data2 = JSON.parse(JSON.stringify(data))

data2.adress.street = "abc"
data2.name = "furkan"


console.log(data)
console.log(data2)

// { name: 'erkam', adress: { street: 'aa', no: 5 } }
// { name: 'furkan', adress: { street: 'abc', no: 5 } }
