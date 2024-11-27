// Even ood number.

let even=0, odd=0;
for(let i=0; i<=100; i++){
    if(i%2===0){
        even+=i;
    }else{
        odd+=i;
    }
}

console.log(even);
console.log(odd)


// Fill 5 size array with random numbers.
let arr = [];

function Unique(n){
    if(arr.includes(n)){
        return 0;
    }
    return 1;
}
while(arr.length<5){
    let random = Math.round(Math.random()*269);
    if(Unique(random)){
        arr.push(random);
    }
}
console.log(arr)

// 6 size random id:

const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let randomStr = "";
for(let i=1; i<=6; i++){
    let random = Math.round(Math.random()*str.length);
    randomStr+=str[random];
}
console.log(randomStr)


// random stirng that generate hexadecimal number.

function generateHEAX (){
    const heaxstr = "0123456789abcdef";
    let hex = "#"
    for(let i=0; i<6; i++){
        hex += heaxstr[Math.floor(Math.random() * heaxstr.length)];
    }
    return hex;
}

console.log(generateHEAX())


// 6 Use the countries array to create the following array of arrays:

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

const selectedCountries = countries.map(country =>{
    const short =  country.slice(0,3).toUpperCase();
    const len = country.length;
    return [country, short, len];
});
console.log(selectedCountries)


console.log("Country with land ----- \n")

const landCountry = countries.filter(country =>{
   return country.includes('land')
})

if(landCountry.length>0){
    console.log(landCountry)
}else{
    console.log("No country without land.")
}


// Longest Country Name:
const LongestCountry = countries.reduce((longest, country)=>{
    return country.length > longest.length ? country : longest;
})

console.log(`Longest Country : ${LongestCountry}`);