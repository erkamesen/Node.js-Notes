/*  - - - - - - - Modules - - - - - - - - - */
console.log("------------".repeat(3))


/* 
Core Modules - Built-in
Thirdy Part Modules
Local Modules
ES - commonJS
*/

//! Core Modules

// Built-in modules list: https://flaviocopes.com/node-core-modules/

var obj = require("fs") // filesystem

/* 
obj.readFileSync()
obj.writeFileSync()
obj.readdirSync()
obj.existsSync()
...
 */


var obj2 = require("os")

console.log(obj2.tmpdir())
// /tmp

console.log(obj2.homedir())
// /home/erkam

console.log("------------".repeat(3))
//! Third Party Modules

// https://www.npmjs.com/

/* 
before require the modules you must install the package to your local
* third_party directory 
npm init or npm init -y(default)


- - 
npm install - - - 

*/


/* 
nodemon: npm install nodemon -g
- Debug -
Install packages global to use all projects
*/


console.log("------------".repeat(3))
//! Local Modules

/* 
* local_module directory

we have 2 function in userData.js file 
export functions from base file and import them any file

*/