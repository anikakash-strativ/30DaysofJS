const str = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."

const ammounts = str.match(/\d+/g).map(Number);

const monthlySalary = ammounts[0];
const annualBonus = ammounts[1];
const monthlyCoursesIncome = ammounts[2];


const annualSalary = monthlySalary * 12;
const annualCoursesIncome = monthlyCoursesIncome * 12;

const totalAnnualIncome = annualBonus+annualSalary+annualCoursesIncome;

console.log(totalAnnualIncome)