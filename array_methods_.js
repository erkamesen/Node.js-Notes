                                    /*  - - - - - - - ARRAY METHODS - - - - - - - - - */

//* split()

var test = "Hello World !!!"

var stringToArray

stringToArray = test.split(" ")
console.log(stringToArray)
// [ 'Hello', 'World', '!!!' ]

console.log("------------".repeat(3))


var list = ["erkam", "ensar", "furkan"]
console.log(list)
// [ 'erkam', 'ensar', 'furkan' ]

list[0] = "Test"
list[3] = "Test 2"

console.log(list)
// [ 'Test', 'ensar', 'furkan', 'Test 2' ]



console.log("------------".repeat(3))

//! includes()

console.log(list.includes("ensar"))
// true

console.log(list.includes("ensa"))
// false


console.log("------------".repeat(3))

//! indexOf() 

console.log(list.indexOf("furkan"))
// 2

console.log(list.indexOf("Test 3"))
// -1


//! splice() - slice()

console.log(list.slice(0,2))
// [ 'Test', 'ensar' ]

newList = list.splice(0,3)


console.log(newList)
// [ 'Test', 'ensar', 'furkan' ]


console.log("------------".repeat(3))

//! concat & spread


var array = [1,2,3]
var array2 = [4,5,6]
var array3 = [7,8,9]
var array4 = [10,11,12]

var response = array.concat(array2)
console.log(response)
// [ 1, 2, 3, 4, 5, 6 ]

response = array2.concat(array2,array,array3)

console.log(response)
/* 
[
  4, 5, 6, 4, 5,
  6, 1, 2, 3, 7,
  8, 9
] 
*/

response = [...array, ...array2, ...array3, ...array4]
console.log(response)

/* 
[
   1,  2, 3, 4,  5,
   6,  7, 8, 9, 10,
  11, 12
]
*/

console.log(...array) //*
// 1 2 3


console.log("------------".repeat(3))

//! Join

var array = ["hello", "world", "how", "are", "you"]


response = array.join("-")
console.log(response)
// hello-world-how-are-you

var text = "istanbul is the most beautiful city in the world!"


var response = text.split(" ")
console.log(response)
/* 
[
  'istanbul',  'is',
  'the',       'most',
  'beautiful', 'city',
  'in',        'the',
  'world!'
]
*/

response[0] = `${response[0][0].toUpperCase()}${response[0].slice(1)}`

console.log(response)

/* 
[
  'Istanbul',  'is',
  'the',       'most',
  'beautiful', 'city',
  'in',        'the',
  'world!'
] 
*/


console.log("------------".repeat(3))
//! reverse()


var list = [1,2,3,4]

list.reverse()

console.log(list)
// [ 4, 3, 2, 1 ]

console.log("------------".repeat(3))

//! pop()

var list = [1, 2, 3, 4]

list.pop()
console.log(list)
// [1, 2, 3]

console.log("------------".repeat(3))

//! shift()

var list = [1 ,2 ,3 ,4]

list.shift()

console.log(list)
// [2, 3, 4]

console.log("------------".repeat(3))

//! unshift()
var list = [1 ,2 ,3 ,4]

list.unshift(5, "test", true)
console.log(list)
/* 
[
  5,    'test',
  true, 1,
  2,    3,
  4
]
*/

console.log("------------".repeat(3))

//! 

var list1 = [1 ,2 ,3 ,4]
var list2 = list1

list2.pop()

console.log(list2)
// [ 1, 2, 3 ]
console.log(list1)
// [ 1, 2, 3 ]

var list1 = [1 ,2 ,3 ,4]
var list2 = [].concat(list1)

list2.pop()

console.log(list2)
// [ 1, 2, 3 ]
console.log(list1)
// [ 1, 2, 3, 4 ]

console.log("------------".repeat(3))
