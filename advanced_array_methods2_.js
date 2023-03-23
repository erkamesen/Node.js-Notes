/*  - - - - - - - ADVANCED ARRAY METHODS - - - - - - - - - */
console.log("------------".repeat(3))

//! reduce()

var list = [1, 3, 6, 9, 11]

var result = list.reduce((previousValue, currentValue) => {
    // initialValue = previousValue
    // previousValue = 1 , currentValue = 3
    // previousValue = 4 , currentValue = 6
    // previousValue = 10 , currentValue = 9
    // previousValue = 19 , currentValue = 11
    return previousValue + currentValue
}, 0)

console.log(result)
// 30

console.log("------------".repeat(3))
var list2 = ["a", "b", "c", "a", "d", "e", "b", "b", "a", "c", "f", "a", "b", "d"]


var result2 = list2.reduce((response, current) => {

    if (!(current in response)) response[current] = 1
    else response[current] += 1
    return response
}, {})

console.log(result2)
// { a: 4, b: 4, c: 2, d: 2, e: 1, f: 1 }
console.log("------------".repeat(3))

var array = [1, 1, 4, 2, 5, 2, 5, 1, 3, 4, 5, 2, 7, 8, 2, 1, 4]

var result3 = array.reduce((response, current) => {
    if (!response.includes(current)) response.push(current)
    return response
}, [])


console.log(result3)
/* 
[
  1, 4, 2, 5,
  3, 7, 8
]
*/

console.log("------------".repeat(3))

var array2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12, 13], [14, 15, 16, 17, 18, 19, 20]]

var result4 = array2.reduce((response, current) => {
    response.push(...current)
    return response
}, [])

console.log(result4)
/* 
[
   1,  2,  3,  4,  5,  6,  7,
   8,  9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20
]
*/

console.log("------------".repeat(3))


//! Array.some() - Array.every()


var list = [5, 8, 10, 14, 20, 3]

var result = list.some(e => e > 18)
console.log(result)
// true

var result2 = list.every(e => e > 4)
console.log(result2)
// false

var result3 = list.every(e => e > 2)
console.log(result3)
// true