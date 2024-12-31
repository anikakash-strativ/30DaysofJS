const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();

console.log(`Sorted age: ${ages}`)

const minAge = ages[0];
const mxAge = ages[ages.length-1];

console.log(`Min age is ${minAge} and Max age is ${mxAge}`)

// average:

const sum = ages.reduce((acc, age)=> acc+age, 0);

const average = sum / ages.length;
console.log(`Average age is : ${average}`);