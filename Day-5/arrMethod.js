const arr = Array() // creates an an empty array
console.log(arr)

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]

// if need to create the array with default values. 
const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

// Concatenating : 

const firstList = [6, 2, 3];

const secondList = [4, 5, 6];

const thirdList = firstList.concat(secondList);

console.log(thirdList);

// size : 
console.log(thirdList.length);

// indexOf

console.log(thirdList.indexOf(6));

const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(`lastIndexOf : ${numbers.lastIndexOf(2)}`) // 7


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ] // List of web technologies
  
  console.log(webTechs.includes('Node'))  // true
  console.log(webTechs.includes('C'))     // false

console.log(numbers.toString()) // 1,2,3,4,5
console.log(numbers)

console.log(" array joints: --------")

console.log(numbers.join()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' ,')) 
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook