import data from "./userData.mjs" // default
import { time, userData, printName } from "./userData.mjs" // named

// import * as data from "./userData.mjs" // import all named
// import { time as a, userData as b, printName as c } from "./userData.mjs" // named with special name
console.log(data)
// { name: 'Erkam', age: 28 }



console.log(time)
console.log(userData)
// 1679837731397
// { name: 'Ensar', age: 24 }

printName("Furkan")
// Furkan


