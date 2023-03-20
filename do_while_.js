                                    /*  - - - - - - - DO WHILE - - - - - - - - - */


// The do...while statements combo defines a code block to be executed once, and repeated as long as a condition is true.

// The do...while is used when you want to run a code block at least one time.

//! Syntax
/* 
do {
  code block to be executed
}
while (condition);
*/



var i = 5

do {
    console.log(i)
    i ++
}
while(i < 4)
// 5

console.log("------------".repeat(3))




var winners = [1 ,5]

// appends list 0-10 random number with while loop

//! do while

do {
    var random = Math.floor(Math.random()*11)
}
while(winners.includes(random)) // if random in winners

winners.push(random)

console.log(winners)
// [ 1, 5, 10 ]


console.log("------------".repeat(3))

//! while

var winners = [1 ,5]
var random = Math.floor(Math.random()*11)


while(winners.includes(random)){
    var random = Math.floor(Math.random()*11)
}

winners.push(random)

console.log(winners)
// [ 1, 5, 3 ]