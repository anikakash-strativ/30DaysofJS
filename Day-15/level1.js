class Animal {
    constructor(fistName, age, color, legs){
        this.fistName = fistName
        this.age = age
        this.color = color
        this.legs = legs
    }

    get getNameAge (){
        return `${this.fistName} and it's age is: ` + this.age
    }

    get getName(){
        return this.fistName;
    }

    get getAge(){
        return this.age;
    }

    get getColor(){
        return this.color;
    }

    get getLegs(){
        return this.legs;
    }
    
    info(){
        let info = `${this.fistName} is ${this.age} years old. It's has ${this.legs} legs, with ${this.color} body color.`
        return info;
    }

}

const animal1 = new Animal('Tom', 3, 'Black', 2);

console.log(animal1);
console.log(animal1.getNameAge)
console.log(animal1.getName)
console.log(animal1.getAge)
console.log(animal1.getColor)
console.log(animal1.getLegs)

console.log(animal1.info())


// Extend class 

class Dog extends Animal{
    constructor(fistName, age, color, legs, breed){
        super(fistName, age, color, legs);
        this.breed = breed
    }

    set setColor(color){
        this.color = color;
    }

    get getNameAge(){
        return `${this.fistName} and it's age is: ${this.age } and the breed is ${this.breed}` 
    }

    // overriding
    info(){
        let info = `${this.fistName} is ${this.age} years old. It's has ${this.legs} legs, with ${this.color} body color. And ${this.fistName}'s breed is : ${this.breed}`
        return info;
    }
}

const dog1 = new Dog('Kutta', 4, 'Brown', 4, 'German')

console.log(dog1)
console.log(dog1.getNameAge)
dog1.setColor='White MIX';
console.log(dog1)
console.log(dog1.info())