const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];


// 1
const union = new Set([...a, ...b]);
console.log("Union:", [...union]); 

//2

const intersection = a.filter(value => b.includes(value));
console.log("Intersection:", intersection);


// 3

const difference = a.filter(value => !b.includes(value));
console.log("Difference (a - b):", difference);
