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