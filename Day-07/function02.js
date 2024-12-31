// 2

function solveQuadratic(a = 1, b = 0, c = 0) {
    const res = b * b - 4 * a * c;
  
    if (res > 0) {
      const root1 = (-b + Math.sqrt(res)) / (2 * a);
      const root2 = (-b - Math.sqrt(res)) / (2 * a);
      return { root1, root2 }; 
    } else if (res === 0) {
      const root = -b / (2 * a);
      return { root };
    } else {
      return {}; 
    }
  }
  
  console.log(solveQuadratic())           
  console.log(solveQuadratic(1, 4, 4))      
  console.log(solveQuadratic(1, -1, -2)) 
  console.log(solveQuadratic(1, 7, 12))     
  console.log(solveQuadratic(1, 0, -4))     
  console.log(solveQuadratic(1, -1, 0))     
  

  // 3
  function printArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
  console.log()
  printArray([1, 2, 3, 4, 5]); 
  console.log()
  printArray(["apple", "banana", "cherry"]); 
  
  //5 

  function swapValues(a, b){
    console.log(`\nBefore Swap: ${a} ${b}`);

    let temp = a;
    a = b;
    b = temp;

    console.log(`After Swap: ${a} ${b}\n`);
  }

  swapValues(10, 24);

  // 6 
  function reverseArray(arr){
    let revarr = [];

    for(let i=arr.length-1; i>=0; i--){
        revarr.push(arr[i]);
    }
    return revarr;
  }

  console.log(`\nReverse array: ${reverseArray([1, 2, 3, 4])}`);

  // 8

function addItem(item, arr){
    arr.push(item);
    return arr;
}
let myarr = [];
console.log(addItem(5, myarr));
console.log(addItem(6, myarr));
console.log()
//9 

function removeItem(idx, arr){
    console.log(`Before remove an index : ${arr}`)
    if(idx>=0 && idx<arr.length){
        arr.splice(idx, 1);
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5, 6];

console.log(removeItem(2, arr));

//14

function sum(...args){
    let totla = 0;
    for(let num of args){
        totla+=num;
    }
    return totla;
}

console.log(`\nSum of the array is ${sum(1,2,3,4,5)}\n`)

//15
function randomUserIp() {
    return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
  }
  
  console.log(`\nRandom IP Address: ${randomUserIp()}`);