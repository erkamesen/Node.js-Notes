/*  - - - - - - - Math - - - - - - - - - */
console.log("------------".repeat(3))

//! random() - floor()

console.log(Math.random()) // 0 - 1
// 0.8505586228079993

console.log(Math.floor(54.99999))
// 54

console.log(Math.floor(Math.random())) // 0
// 0

console.log(Math.floor(Math.random() * 10)) // 0 - 9
// 7 


console.log("------------".repeat(3))
//! ceil()

console.log(Math.ceil(25.00001))
// 26


console.log("------------".repeat(3))
//! round()


console.log(Math.round(54.5))
// 55

console.log(Math.round(54.4))
// 54


console.log("------------".repeat(3))

//! PI()

console.log(Math.PI)
// 3.141592653589793

console.log("------------".repeat(3))

//! abs()


console.log(Math.abs(-24))
// 24

//! sqrt()
// square root

console.log(Math.sqrt(25))
// 5


console.log(Math.sqrt(81))
// 9

console.log("------------".repeat(3))


//! cbrt()
// cube root


console.log(Math.cbrt(27))
// 3

console.log("------------".repeat(3))

//! max() min()


var array = [1, -1, 5, 15, 35, 1231, 8, -12, 5123]

console.log(Math.max(1, 2, -1, 6, 4))
// 6

console.log(Math.min(1, 2, -1, 6, 4))
// -1

console.log(Math.max(...array))
// 5123

console.log(Math.min(...array))
// -12