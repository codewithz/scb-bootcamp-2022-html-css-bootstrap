let numbers = [3, 4]

console.log("Original Array ", numbers)

// End of the Array 

numbers.push(5);
console.log("Push", numbers)

numbers.push(6, 7, 8)
console.log("Push", numbers)

// Beginning of array

numbers.unshift(1, 2)
console.log("After adding the numbers to beginning of the array", numbers)

//Middle of Array 

numbers.splice(2, 0, 'a', 'b', 'c');
console.log("After splicing", numbers)

//Remove an element from beginning

numbers.shift()
console.log("After removing first element", numbers)

//Remove an element from end

numbers.pop()
console.log("After removing from end", numbers)

// Remove an element 

numbers.splice(3, 1)
console.log("After splicing for delete", numbers)

// Reverse an array 

numbers.reverse()

console.log("After Reverse", numbers)

// Sorting of an array 

numbers.sort()
console.log("After Sort", numbers)

// Convert Array to String 

let str = numbers.toString()

console.log(str)

console.log('------------------- Iterate  through an array ------------------')

let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];

console.log(colors)

for (let index = 0; index < colors.length; index++) {
    console.log(colors[index])
}


console.log("------------- for of --------------")

for (let item of colors) {
    console.log('RPG--' + item)
}