/*  - - - - - - - Date - - - - - - - - - */
console.log("------------".repeat(3))


var result = new Date()
console.log(result)
// 2023-03-24T11:24:19.052Z - yyyy-mm-dd


console.log(result.getTime())
// 1679668557697 - Tİmestamp

console.log(Date.now())
// 1679668831890


var month = result.getMonth()

console.log(month)
// 2 - January = 0


year = result.getFullYear()
console.log(year)
// 2023


minutes = result.getMinutes()

console.log(minutes)
// 43
console.log("------------".repeat(3))



var result2 = result.toLocaleDateString("tr-TR", {month: "long"})
console.log(result2)
// Mart


result2 = result.toLocaleDateString("tr-TR", {month: "long", day:"numeric"})
console.log(result2)
// 24 Mart


result2 = result.toLocaleDateString("tr-TR", {month: "short", day:"2-digit", year:"numeric", hour:"numeric", minute:"numeric"})
console.log(result2)
// 24 Mar 2023 17:48