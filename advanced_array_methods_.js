                                    /*  - - - - - - - ADVANCED ARRAY METHODS - - - - - - - - - */
console.log("------------".repeat(3)) 


//! map()

var array = [1, 2, 3, 4 ,5]

array2 = array.map(n => n**2)

console.log(array2)
// [ 1, 4, 9, 16, 25 ]

var nameList = ["erkam", "ali", "murat", "ahmet"]


nameList2 = nameList.map((e, i) => `${i+1}. ${e}`)

console.log(nameList2)
// [ '1. erkam', '2. ali', '3. murat', '4. ahmet' ]

console.log("------------".repeat(3)) 

//! filter()

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var result = array.filter(e => e % 2 == 0)
console.log(result)
// [ 2, 4, 6, 8, 10]

var ages = [10, 22, 4, 35, 42, 14, 13, 16, 17, 28]
var result2 = ages.filter(e => e >= 18)
// [ 22, 35, 42, 28 ]

console.log(result2)

console.log("------------".repeat(3)) 

//! find()

var list = ["erkam", "ensar", "furkan efe"]

var result = list.find(e => e.startsWith("er"))
var result2 = list.find(e => e.endsWith("efe"))
console.log(result)
// erkam

console.log(result2)
// furkan efe

console.log("------------".repeat(3)) 

//! sort()

var array = [3,1,8,4,2,7]

array = array.sort()
console.log(array)
// [ 1, 2, 3, 4, 7, 8 ]

var array2 = ["a", "f", "h", "z", "b", "l"]

array2 = array2.sort()
console.log(array2)
// [ 'a', 'b', 'f', 'h', 'l', 'z' ]

var array3 = ["bac", "bca", "abc", "dba", 3, 1, 7]
console.log(array3.sort())
/* 
[
  1,     3,     7,
  'abc', 'bac', 'bca',
  'dba'
]
*/


array = [3,1,8,4,2,7]

console.log(array.sort((a,b) => a - b))
// [ 1, 2, 3, 4, 7, 8 ]

console.log(array.sort((a,b) => b - a))
// [ 8, 7, 4, 3, 2, 1 ]