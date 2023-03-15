                                    /*  - - - - - - - ARRAY - - - - - - - - - */

var list = [1, "test", null, true]

console.log(list)
// [ 1, 'test', null, true ]

console.log(list[0])
// 1

console.log(list.length)
// 4

console.log(list[list.length-1])
// true

list.length = 8
console.log(list)
// [ 1, 'test', null, true, <4 empty items> ]

console.log("------------".repeat(3))

// PUSH

list = []

list.push("hello", "world")
console.log(list)
// [ 'hello', 'world' ]

// Splice

list.splice(1)
console.log(list)
// [ 'hello' ]

console.log("------------".repeat(3))

var list2 = list

list2.push("TEST")
console.log(list) //! ITS FIRST LIST
// [ 'hello', 'TEST' ]



