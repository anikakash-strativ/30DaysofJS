const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// 1

let newSet = new Set();

console.log(newSet)

//2

for(let i=0; i<=10; i++){
    newSet.add(i);
}
console.log("Set containing 0 to 10:", newSet)


// 3

newSet.delete(5);
console.log(newSet)

// 4
newSet.clear();
console.log("Set after clearing:", newSet);

// 5

let stringArray = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let stringSet = new Set(stringArray);
console.log("Set of 5 string elements:", stringSet);

// 6

const countryMap = new Map();
for (const country of countries) {
  countryMap.set(country, country.length);
}
console.log("Map of countries and their lengths:");
console.log(countryMap);
