let dog = {};

dog.name = "Buddy";
dog.legs = 4;
dog.color = "Brown";
dog.age = 3;
dog.bark = function(){
    return "Woof Woof";
}


console.log("Dog's name:", dog.name);
console.log("Dog's legs:", dog.legs);
console.log("Dog's color:", dog.color);
console.log("Dog's age:", dog.age);
console.log("Dog's bark:", dog.bark());

dog.breed = "German";
dog.getDogInfo = function(){
    return `Name : ${this.name}, Breed : ${this.breed}, age : ${this.age}, color: ${this.color}, Legs: ${this.legs}`
}

// Print Updated Dog 
console.log("Updated dog object:", dog);

// print dog info using getDogInfo:
console.log("Dog info:", dog.getDogInfo());