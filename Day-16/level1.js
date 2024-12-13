const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

// Task 1:

const skillsJSON = JSON.stringify(skills);
console.log(skillsJSON);

// Task 2:

const ageJSON = JSON.stringify(age);
console.log(ageJSON);


// Task 3:
const isMarriedJSON = JSON.stringify(isMarried);
console.log(isMarriedJSON);


// Task 4:

const studentJSON = JSON.stringify(student, null, 2);
console.log(studentJSON);

// Level 2:

const studentJSON2 = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 2);

console.log(studentJSON2);


// Level 3:

// Task 1:

const users = JSON.parse(txt);
console.log(users)


// Task 2:
let userWithMostSkills = '';
let maxSkillsCount = 0;

for (const user in users) {
  const skillsCount = users[user].skills.length;
  if (skillsCount > maxSkillsCount) {
    maxSkillsCount = skillsCount;
    userWithMostSkills = user;
  }
}

console.log(`User with the most skills is ${userWithMostSkills} with ${maxSkillsCount} skills.`);

