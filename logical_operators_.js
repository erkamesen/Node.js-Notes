                                    /*  - - - - - - - LOGICAL OPERATORS - - - - - - - - - */

// == => is equal without type ?  - - if its equal result will be true otherwise false
// === => is equal with type ?  - - if its equal result will be true otherwise false
var a = 3;
var b = 3;
var c = "3";

console.log(a == b)
// true

console.log(a == c)
// true


console.log(a == 3)
// true

console.log(a === "3")
// false

console.log(a == 5)
// false

console.log("------------".repeat(3))

/* != - - - - !== - - not equal */

console.log(a != 4)
// true

console.log(a !== b)
// false

console.log(a !== c)
// true

console.log("------------".repeat(3))

/* > Greater Than - < Lesser Than - >= Greater Than or Equal - <= Lesser Than or Equal */

console.log(5<4)
// false

console.log(5>=5)
// true

console.log("------------".repeat(3))
/* Logical  */

// && - and => true if both the operands/boolean values are true, else evaluates to false
// ||	or => true if either of the operands/boolean values is true . evaluates to false if both are false
// !	not => true if the operand is false and vice-versa.

console.log(true && true && false)
// false

console.log(true || true || false)
// true

console.log(!(true && true && false))
// true

console.log(false || false)
// false

console.log(!false || false)
// true

console.log(!false && (false || false || !true))
// false

console.log("------------".repeat(3))


