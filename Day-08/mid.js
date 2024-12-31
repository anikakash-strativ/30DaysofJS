const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  

  // 1

  let mostSkilledPerson = Object.entries(users).reduce((a,b)=>{
    return a[1].skills.length > b[1].skills.length ? a : b; 
  })

  console.log(`person who has many skills : ${mostSkilledPerson[0]} `)

  // 2

  const userCnt = Object.entries(users).reduce((acc, user)=>{
    if(user[1].isLoggedIn) acc.loggedIn++;
    if(user[1].points >= 50) acc.with50Points++;
    return acc;
  },
  {loggedIn: 0, with50Points : 0}
);

console.log("Logged-in users:", userCnt.loggedIn);
console.log("Users with >= 50 points:", userCnt.with50Points);

// 3
const MernUser = Object.keys(users).filter(user =>{
  const userSkill = users[user].skills;
  return ['MongoDB', 'Express', 'React', 'Node'].every(skill => userSkill.includes(skill));
})

console.log(MernUser)

// 4
const newUser = {...users, anik : { email: 'anik.dash@strativ.se', skills: ['HTML', 'CSS', 'JavaScript', 'Node'], age: 25, isLoggedIn: true, points: 25 }}
console.log("Updated users object:", newUser);


// 5
const userKeys = Object.keys(users);
console.log("Keys of users object:", userKeys);

// 6

const userValues = Object.values(users);
console.log("Values of users object:", userValues);

// 7 
const countries = {
  USA: { capital: "Washington, D.C.", population: 331000000, languages: ["English"] },
  Japan: { capital: "Tokyo", population: 126000000, languages: ["Japanese"] },
  India: { capital: "New Delhi", population: 1393409038, languages: ["Hindi", "English"] }
};

Object.entries(countries).forEach(([country, details]) => {
  console.log(`${country}: Capital - ${details.capital}, Population - ${details.population}, Languages - ${details.languages.join(', ')}`);
});