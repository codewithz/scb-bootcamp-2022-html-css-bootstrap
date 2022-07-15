let person = {
    name: 'Zartab M Nakhwa',
    age: 31,
    gender: "Male",
    city: "Mumbai",
    maritalStatus: "Married",
    vaccinated: true,
    education: ["Bachelors in IT", "Masters in IT"],
    car: {
        name: "Toyota Corolla",
        color: "Silver"
    },
    blog: "www.codewithz.com",
    welcomeMessage: function () {
        console.log("Hey Coding Owls!!")
    }
}

console.log(person)

// Access elements in objects 

// 1. DOT Operator

console.log("------- Accessing using . operator-------")
console.log(person.name)
console.log(person.car.name)
console.log(person.education[1])

// 2. Square Bracket

console.log("-------- Access using [] -------------")
console.log(person["name"])
console.log(person["age"])
console.log(person["car"]["color"])
const educationArray = person["education"]
console.log(educationArray[0])
console.log(person["education"][1])

// Iterate through an object 

console.log("------- Iterating an object----")

for (let key in person) {
    console.log(key, ":", person[key])
}