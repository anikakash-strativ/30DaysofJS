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