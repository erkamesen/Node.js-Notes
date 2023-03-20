                                    /*  - - - - - - - FOR LOOP - - - - - - - - - */

//* Loops can execute a block of code as long as a specified condition is true.


//! Syntax
/* 
while (condition) {
    code block to be executed
}
*/

var i = 0

while (i < 6) {   
    console.log(i)
    i++
}
/* 
0
1
2
3
4
5
*/


//! TASK

// Find the first 5 numbers that are divisible by both 7 and 9 using a while loop.
// Add these numbers found with the while loop into an array and print them to the console with the for loop.


//! 1
var numberList = []
var count = 1
while(true){
    if(numberList.length == 5) break
    else{
        if(count %7==0 && count %9 ==0){
            numberList.push(count)
            count ++
        }
        else count ++

    }

}

console.log(numberList)
// [ 63, 126, 189, 252, 315 ] first 5 number

for(elem of numberList) console.log(elem)
/* 
63
126
189
252
315
*/

//! 2

var numberList = []
var count = 1

for(var i = 0; i<5; i++){

    while(count%7 !=0 || count%9 !=0){
        count ++
    }
    numberList.push(count)
    count ++
}
console.log(numberList)
// [ 63, 126, 189, 252, 315 ]