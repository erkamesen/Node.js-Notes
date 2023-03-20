                                    /*  - - - - - - - FOR LOOP - - - - - - - - - */


//* Loops can execute a block of code a number of times.


for(var x=0; x<10; x++) {
    console.log("hello world")
}
/* 
hello world
hello world
hello world
hello world
hello world
hello world
hello world
hello world
hello world
hello world
*/


for(var x=0; x<10; x++) console.log(`Hello World ${x+1}`)
/* 
hello world 1
hello world 2
hello world 3
hello world 4
hello world 5
hello world 6
hello world 7
hello world 8
hello world 9
hello world 10
*/

console.log("------------".repeat(3))
//! for of - (itreable)

//* normal
var list = ["Karabuk", "Ankara", "Istanbul"]
for(var i =0;i<list.length; i++) console.log(list[i])
/* 
Karabuk
Ankara
Istanbul
*/

for(var elem of list) console.log(elem)
/* 
Karabuk
Ankara
Istanbul
*/

var text = "Hello World"
for(var elem of text) console.log(elem)
/* 
H
e
l
l
o
 
W
o
r
l
d
*/

console.log("------------".repeat(3))

//! TASK
/* 
---
*
**
***
****
*****
---
*/

for(var i=1; i<6; i++) console.log("*".repeat(i))
/* 
*
**
***
****
*****
 */

for(var i=1; i<11; i++) console.log("*".repeat(i))
/* 
*
**
***
****
*****
******
*******
********
*********
**********
*/

var text = ""
for(var i=1; i<6; i++) {
    var add_text = "*".repeat(i)
    text += `${add_text}\n`
}

console.log(text)
/* 
*
**
***
****
*****

*/
