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

