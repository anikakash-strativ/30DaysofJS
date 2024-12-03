//1
const constants = [2.72, 3.14, 9.81, 37, 100]
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

//2
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }
const { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter)

// Level 2:


const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ];


    // Task 1: 

    users.forEach(({name, scores, skills, age})=>{
        console.log(`Keys: ${name}, ${scores}, ${skills}, ${age}`);
    })

    // Task 2:

    let lessSkilled = users.filter(({skills})=>{
        return skills.length <2;
    })

    console.log(`Less then 2 skills :`);
    console.log(lessSkilled)

// Level 3:

const countries = [
    {
      name: "Finland",
      capital: "Helsinki",
      population: 5530719,
      languages: ["Finnish", "Swedish"]
    },
    {
      name: "Estonia",
      capital: "Tallinn",
      population: 1328976,
      languages: ["Estonian"]
    },
    {
      name: "Sweden",
      capital: "Stockholm",
      population: 10353442,
      languages: ["Swedish"]
    }
  ];

  console.log("----------\n")
  // Task 1:
  countries.forEach(({name, capital, population, languages})=>{
    console.log(`Country: ${name}`);
    console.log(`Capital: ${capital}`);
    console.log(`Population: ${population}`);
    console.log(`Languages: ${languages.join(", ")}`);
    console.log("-----------------------");
  })

  // Task 2:
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
const [name, skills, [, , jsScore, reactScore]] = student;

// console.log(name);   
// console.log(skills);      
// console.log(jsScore);     
// console.log(reactScore);  

// Task 3:

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

// function convertArrayToObject (st){
//     let arr = [];
//     st.forEach(([name, skills, scores])=>{
//         arr.push({
//             name,
//             skills, 
//             scores,
//        });
//     }) 
//     return arr;
// }
// console.log(convertArrayToObject(students));

// 2nd way:
function convertArrayToObject (st){
    return st.map(([name, skills, scores])=>
        ({
            name,
            skills, 
            scores,
       })
    ) 
}
console.log(convertArrayToObject(students));
