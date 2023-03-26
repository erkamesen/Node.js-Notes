
// import here

var data = require("/home/erkam/Files/Nodejs/Nodejs - JS Guide/local_module/userData.js") // Path


console.log(data.age())
// 28

console.log(data.getMail())
// erkamesen789@gmail.com

console.log(data.name())
// Erkam Esen


var data2 = require("./userData") // Relative path

console.log(data2.age())
// 28

console.log(data2.getMail())
// erkamesen789@gmail.com

console.log(data2.name())
// Erkam Esen

console.log(data2)

/* 
{
  name: [Function: getName],
  getMail: [Function: getMail],
  age: [Function]
}
*/