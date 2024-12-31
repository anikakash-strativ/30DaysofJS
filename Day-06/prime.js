// 0 to 100 prime number:

function isPrime(n){
    if(n==2) return true;
    if(n%2===0 || n===1) return false;

    let root = Math.floor(Math.sqrt(n));

    for(let i=3; i<=root; i++){
        if(n%i===0) return false;
    }
    return true;
}

for(let i=0; i<=100; i++){
    if(isPrime(i)){
        console.log(`${i} is prime number.`)
    }
}