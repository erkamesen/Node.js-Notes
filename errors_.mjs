/*  - - - - - - - ERRORS - - - - - - - - - */
console.log("------------".repeat(3)) 

// Throw - Callback-, - Promise Rejections - EventEmitter

//! Error object

var err = new Error("BUGGED")

console.log(err)
/* 
Error: BUGGED
    at file:///home/erkam/Files/Nodejs/Nodejs%20-%20JS%20Guide/errors_.mjs:8:11
    at ModuleJob.run (internal/modules/esm/module_job.js:145:37)
    at async Loader.import (internal/modules/esm/loader.js:182:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
*/


console.log(err.message)
// BUGGED

console.log(err.name)
// Error

console.log(err.stack)
/* 
Error: BUGGED
    at file:///home/erkam/Files/Nodejs/Nodejs%20-%20JS%20Guide/errors_.mjs:8:11
    at ModuleJob.run (internal/modules/esm/module_job.js:145:37)
    at async Loader.import (internal/modules/esm/loader.js:182:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
*/


//! RangeError

var a = 3.14

// console.log(a.toFixed(200))
// RangeError: toFixed() digits argument must be between 0 and 100

console.log("------------".repeat(3)) 
//! ReferenceError

function test(){
    var b = 3
}

test()
// console.log(b)
// ReferenceError: b is not defined

console.log("------------".repeat(3)) 

//! TypeError

var object = {name:"Erkam", age:28}

console.log(object.surname)
// undefined


// console.log(object.surname.anything)
// TypeError: Cannot read property 'anything' of undefined

console.log("------------".repeat(3)) 
//! SyntaxError

// .
// SyntaxError: Unexpected end of input


// console.log("test"
// SyntaxError: missing ) after argument list

console.log("------------".repeat(3)) 

//! Throw

// throw new Error("Test")
/* 
throw new Error("Test")
      ^

Error: Test
    at file:///home/erkam/Files/Nodejs/Nodejs%20-%20JS%20Guide/errors_.mjs:81:7
    at ModuleJob.run (internal/modules/esm/module_job.js:145:37)
    at async Loader.import (internal/modules/esm/loader.js:182:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
*/


//! try - catch - finally

try{
    console.log("start")
    throw new Error("Its Bugged")
} catch(e){
    console.log(e)
}
/*
start
Error: Its Bugged
    at file:///home/erkam/Files/Nodejs/Nodejs%20-%20JS%20Guide/errors_.mjs:98:11
    at ModuleJob.run (internal/modules/esm/module_job.js:145:37)
    at async Loader.import (internal/modules/esm/loader.js:182:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
*/

/* try{
    console.log("start")
    throw new Error("Its Bugged")
} catch(e){
    console.log(e)
    throw new Error("Catch Error")
}finally{
    console.log("Its run everytime")
} */
/* 
Its run everytime
file:///home/erkam/Files/Nodejs/Nodejs%20-%20JS%20Guide/errors_.mjs:116
    throw new Error("Catch Error")
          ^

Error: Catch Error
    at file:///home/erkam/Files/Nodejs/Nodejs%20-%20JS%20Guide/errors_.mjs:116:11
    at ModuleJob.run (internal/modules/esm/module_job.js:145:37)
    at async Loader.import (internal/modules/esm/loader.js:182:24)
*/


try{
    console.log("Try scope")
}
catch(e){
    console.log("Catch scope")
}
finally{
    console.log("Finally scope")
}
/* 
Try scope
Finally scope
*/

console.log("------------".repeat(3)) 



import fs from "fs"

/* 
fs.readFileSync("./errors2.txt", "utf-8", (err, data) =>{
    if (err) console.log(err)
    else console.log(data)
}) */

/* 
fs.js:462
  handleErrorFromBinding(ctx);
  ^

Error: ENOENT: no such file or directory, open './errors2.txt'
    at Object.openSync (fs.js:462:3)
    at Object.readFileSync (fs.js:364:35)
    at file:///home/erkam/Files/Nodejs/Nodejs%20-%20JS%20Guide/errors_.mjs:151:4
    at ModuleJob.run (internal/modules/esm/module_job.js:145:37)
    at async Loader.import (internal/modules/esm/loader.js:182:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5) {
  errno: -2,
  syscall: 'open',
  code: 'ENOENT',
  path: './errors2.txt'
}
*/


console.log("------------".repeat(3)) 


function getUserData(id, callback){
    var user = {name:"Erkam"}
    if(!user) return callback(new Error("User not found!"))
    callback(null, user)
}

getUserData(1, (err, user) =>{
    if (err) console.log(err)
    console.log(user)
})
// { name: 'Erkam' }

