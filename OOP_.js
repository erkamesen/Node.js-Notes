                                    /*  - - - - - - - OOP - - - - - - - - - */

console.log("------------".repeat(3))

var object = {
    "name":"Erkam",
    "surname": "Esen",
    "sing": (who) => {
        console.log(`Who let the dogs out ?\n${who} ${who} ${who}`)
    }
}

console.log(object.name)
// Erkam
console.log(object.surname)
// Esen

object.sing("its not me")
/* 
Who let the dogs out ?
its not me its not me its not me
*/

//! Add keys & value


var age = 28

object["age"] = age
console.log(object.age)
//! Delete


delete object.name

console.log(object)
// { surname: 'Esen', sing: [Function: sing], age: 28 }

console.log("------------".repeat(3))

console.log(Object.keys(object))
// [ 'surname', 'sing', 'age' ]

console.log(Object.values(object))
// [ 'Esen', [Function: sing], 28 ]


console.log(Object.entries(object))
// [ [ 'surname', 'Esen' ], [ 'sing', [Function: sing] ], [ 'age', 28 ] ]