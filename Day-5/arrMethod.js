const arr = Array() // creates an an empty array
console.log(arr)

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]

// if need to create the array with default values. 
const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

// Concatenating : 

const firstList = [1, 2, 3];

const secondList = [4, 5, 6];

const thirdList = firstList.concat(secondList);

console.log(thirdList);