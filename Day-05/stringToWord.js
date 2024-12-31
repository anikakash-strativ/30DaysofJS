let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = text.replace(/[^a-zA-Z0-9\s]/g,'').split(' ');
console.log(words)
console.log(words.length)


console.log("\n ----------- \n");

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// add meat
if(!shoppingCart.includes['Meat']){
    shoppingCart.unshift("Meat");
}

// add sugar from end;

if(!shoppingCart.includes['Sugar']){
    shoppingCart.push("Sugar");
}

const isAllergicToHoney = true;

if(isAllergicToHoney){
    const honeyIndex = shoppingCart.indexOf("Honey");

    if(honeyIndex !== -1){
        shoppingCart.splice(honeyIndex, 1);
    } 
}

const teaIndex = shoppingCart.indexOf('Tea');
if(teaIndex !== -1){
    shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart)
