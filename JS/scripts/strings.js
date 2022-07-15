let name = "Ajay"
let company = "SCB"
let bankId = 12345

let data = name + " works at " + company + " and his bank id is " + bankId
console.log(data)

console.log("------- String Interpolation ------------")

let data1 = `${name} works at  ${company} and his bankid is ${bankId}`
console.log(data1)

console.log('---------- Cases------------')

let s1 = "standard"
let s2 = "CHARTERED"

console.log(s1)
s1 = s1.toUpperCase()
console.log("After Changing Case:", s1)

console.log(s2)
s2 = s2.toLowerCase()
console.log("After Changing the Case:", s2)

console.log("---------- Trims ----------")

let s3 = "   Hello World!      ";
console.log(s3, s3.length)
s3 = s3.trim()
console.log(s3, s3.length)

console.log("-------- Indexes------------")
let s4 = "Standard"

let i1 = s4.indexOf("a")
console.log("Index of a is", i1)

let i2 = s4.indexOf("a", i1 + 1);
console.log("Index of second a is", i2)

let substring = s4.slice(2, 5)
console.log("Sliced:", substring)