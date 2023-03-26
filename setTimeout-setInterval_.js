/*  - - - - - - - setTimeout - setInterval - - - - - - - - - */
console.log("------------".repeat(3))


//! setTimeout()


/* 
The setTimeout() method calls a function after a number of milliseconds.

1 second = 1000 milliseconds.

The setTimeout() is executed only once.
* myTimeout = setTimeout(function, milliseconds);



*/

setTimeout(() => {
    console.log("Run after 3 seconds")
}, 3000)

// Run after 3 seconds



var time = Date.now()


setTimeout(() => {
    console.log(Date.now()-time)
}, 5000)

// 5003 !!!


/* 
The setTimeout() is executed only once.

If you need repeated executions, use setInterval() instead.

Use the clearTimeout() method to prevent the function from starting.

To clear a timeout, use the id returned from setTimeout():
myTimeout = setTimeout(function, milliseconds);

Then you can to stop the execution by calling clearTimeout():
clearTimeout(myTimeout);

*/



console.log("------------".repeat(3))
//! setInterval()

/* 

The setInterval() method calls a function at specified intervals (in milliseconds).

The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.

1 second = 1000 milliseconds.
*/


setInterval(() =>{
    console.log("test")
}, 2000)

/* 
test
Run after 3 seconds
test
5002
test
test
test
test
test
...
..
.
*/