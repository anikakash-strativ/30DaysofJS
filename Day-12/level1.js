const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

const monthlyIncomePattern = /(\d+)\s*euro(?:\s*\w+)*\s*per\s*month/gi;
const annualIncomePattern = /(\d+)\s*euro(?:\s*\w+)*\s*\bannual\b/gi;

let monthlyIncomes = [...text.matchAll(monthlyIncomePattern)].map(match => parseInt(match[1], 10));
console.log([...text.matchAll(monthlyIncomePattern)].map(match => parseInt(match[1], 10)));
console.log("-------")
let totalMonthlyIncome = monthlyIncomes.reduce((sum, income) => sum + income, 0) * 12;

// Extract and calculate annual incomes
let annualIncomes = [...text.matchAll(annualIncomePattern)].map(match => parseInt(match[1], 10));
let totalAnnualIncome = annualIncomes.reduce((sum, income) => sum + income, 0);
console.log([...text.matchAll(annualIncomePattern)].map(match => parseInt(match[1], 10)))

// Calculate total annual income
let totalIncome = totalMonthlyIncome + totalAnnualIncome;

console.log("Total Annual Income:", totalIncome, "euro");

// Task 2:

const texts = "The position of some particles on the horizontal x-axis 5, -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.";

const points = texts.match(/-?\d+/g).map(Number);

const sortedPoints = points.sort((a, b) => a - b); 

const distance = Math.abs(sortedPoints[sortedPoints.length - 1] - sortedPoints[0]);

console.log("Extracted Points:", points);
console.log("Sorted Points:", sortedPoints);
console.log("Distance between furthest particles:", distance);

// Variable check:

function is_valid_variable(name) {
    const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    return regex.test(name);
}

console.log(is_valid_variable('first_name')); // True
console.log(is_valid_variable('first-name')); // False
console.log(is_valid_variable('1first_name')); // False
console.log(is_valid_variable('firstname'));  // True
