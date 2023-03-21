                                    /*  - - - - - - - forEach - - - - - - - - - */


console.log("------------".repeat(3))

function callbackFunc(x){
    console.log(x+5)
}


var array = [1,2,3,4]

array.forEach(callbackFunc)
/* 
6
7
8
9
*/
console.log("------------".repeat(3))

array.forEach(e => {
    console.log(e+1)
})
/* 
2
3
4
5
*/
console.log("------------".repeat(3))

array.forEach((e, i) => {
    console.log(e, i)
})
/* 
1 0
2 1
3 2
4 3
*/
console.log("------------".repeat(3))

array.forEach(e => {
    console.log(e)
    array[2] = 5
})
/* 
1
2
5
4
*/
console.log("------------".repeat(3))

array.forEach(e => {
    console.log(e)
    if(e==2) array.shift()
})

/* 
1
2
4
*/
console.log("------------".repeat(3))
