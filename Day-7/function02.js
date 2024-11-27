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

  //