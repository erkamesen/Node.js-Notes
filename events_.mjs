/*  - - - - - - - EVENTS - - - - - - - - - */
console.log("------------".repeat(3))

/* 
HTML events are "things" that happen to HTML elements.

When JavaScript is used in HTML pages, JavaScript can "react" on these events.
*/


/* 
An HTML event can be something the browser does, or something a user does.

Here are some examples of HTML events:

- An HTML web page has finished loading
- An HTML input field was changed
- An HTML button was clicked

Often, when events happen, you may want to do something.
JavaScript lets you execute code when events are detected.
HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

With single quotes:
* <element event='some JavaScript'>

With double quotes:
* <element event="some JavaScript">

In the following example, an onclick attribute (with code), is added to a <button> element:

! Example

* <button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>

*/

// events


import { EventEmitter } from "events"
import { clearInterval } from "timers"


var emitter = new EventEmitter()


function clicked2(){
    console.log("clicked2 is running")
}

emitter.addListener("click", (a, b) => {
    console.log("clicked", a, b)
}) // event handler - event listener


// emitter.addListener("click", clicked2) 
emitter.on("click", clicked2) // addLister == on



emitter.emit("click", 3, 5)
// clicked 3 5
// clicked2 is running

emitter.emit("click", "a", true)
// clicked a true
// clicked2 is running

console.log("------------".repeat(3))


//! once 

emitter.once("singleRun", () =>{
    console.log("Run just 1 time")
})

emitter.on("multiRun", () =>{
    console.log("Run any time")
})


setInterval(() => {
    emitter.emit("singleRun")
}, 1000)

// Run just 1 time


setInterval(() => {
    emitter.emit("multiRun")
}, 1000)

/* 
Run any time
Run any time
Run any time
Run any time
Run any time
...
..
.
*/


console.log("------------".repeat(3))


console.log(emitter.eventNames())
// [ 'click', 'singleRun', 'multiRun' ]

console.log(emitter.listeners("click"))
// [ [Function], [Function: clicked2] ]


console.log(emitter.listenerCount("click")) 
// 2


emitter.removeAllListeners("multiRun")








