const currentYear = new Date().getFullYear();

// const birthYear = prompt("Enter year")
const birthYear = 2017;

const age = currentYear - birthYear;

if(age >= 18){
    console.log(`You are ${age} years old. You are allowed to dirve.`);
}else{
    const yearToWait = 18-age;
    console.log(`you are ${age} years old. and you have to wait ${yearToWait}.`)
}


// Human readable date time:

const now = new Date();

// get all individual date and time.

const year = now.getFullYear();
const month = String(now.getMonth()+1).padStart(2, '0');
const date = String(now.getDate()).padStart(2,'0');
const hours = String(now.getHours()).padStart(2,'0');
const minutes = String(now.getMinutes()).padStart(2,'0');

const format1 = `${year}-${month}-${date} ${hours}:${minutes}`
const format2 = `${date}-${month}-${year} ${hours}:${minutes}`
const format3 = `${date}/${month}/${year} ${hours}:${minutes}`

console.log(format1)
console.log(format2)
console.log(format3)