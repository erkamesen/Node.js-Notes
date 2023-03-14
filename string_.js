                                    /*  - - - - - - - STRING METHODS - - - - - - - - - */

var a;
a = "Deneme";
a = 'test'
// console.log(a)
// test

var b = "Merhaba";

// console.log(a + " " + b);
// test Merhaba

var c = `${a} ${b} ${3+5}`;

// console.log(c);
// test Merhaba 8

        /* Indexing */

var a = "test";

// console.log(a[1])
// e

// console.log(a.charAt(1))
// e

var a = "Hello World!";

// console.log(a.indexOf("o"));
// 4

// console.log(a.indexOf("l"))
// 2 
// requested character - first index  

// console.log(a.indeOf("l", 2))
// 3 
// second 'l'

// console.log(a.lastIndexOf("l"))
// 9

// requested character - last index  

/* Control */

var a = "Hello World!";

// console.log(a.startsWith("He"))
// console.log(a.startsWith("he"))
// true
// false
 
//console.log(a.endsWith("d!"))
// true

// console.log(a.startsWith("lo", 3))
// true

/* in or not in */

//console.log(a.includes("ello"))
// true

/* String Slice */

// console.log(a.slice(2, 7))
// llo w

//console.log(a.slice(6))
// World!

/* UPPER LOWER */

var a = "i love coding!"

// console.log(a.toUpperCase())
// I LOVE CODING!

var b = "HELLO WORLD!"

// console.log(b.toLowerCase())
// hello world!

 /* Strip */

var a = "       test!                            ";
// console.log(a)
// console.log(a.trim())
//        test!       
// test!


var a = "hello world!";
console.log(a.length)
// 12