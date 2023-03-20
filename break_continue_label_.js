                                    /*  - - - - - - - BREAK CONTINUE LABEL - - - - - - - - - */




//! Break statement
// You have already seen the break statement used in an earlier chapter of this tutorial. It was used to "jump out" of a switch() statement.

// The break statement can also be used to jump out of a loop:

// Example

/* 
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
} 
*/


for(var i = 0; i<5; i++){
    if(i==4) break
    else console.log(i) 
}

/* 
0
1
2
3
*/

console.log("------------".repeat(3))


//! Continue Statement

// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

// This example skips the value of 3: 

// Example
/* 
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
} 
*/

var ages = [15, 19, 21, 2, 54, 34, 23, 21, 14, 8, 12, 25]

for(age of ages){
    if(age<18) continue
    else console.log(age)

}

/* 
9
21
54
34
23
21
25
*/


                                    
console.log("------------".repeat(3))



//! Label

// The labeled statement can be used with break or continue statements. It is prefixing a statement with an identifier which you can refer to. 

/* 
let str = '';

loop1:
for (let i = 0; i < 5; i++) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
}

console.log(str);
    Expected output: "0234"

*/

loop1:
for(var i =0;i <10;i ++){
    for(var j=0; j<10;j++){
        if(j == 5) break loop1
        console.log(j)
    }
    console.log(`i= ${i}`)
}
/* 
0
1
2
3
4
*/

loop1:
for(var i =0;i <10;i ++){
    for(var j=0; j<10;j++){
        if(j == 5) continue loop1
        console.log(j)
    }
    console.log(`i= ${i}`)
}
/* 
0
1
2
3
4
0
1
...
*/

