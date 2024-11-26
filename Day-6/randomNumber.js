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