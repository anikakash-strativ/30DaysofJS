let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = text.replace(/[^a-zA-Z0-9\s]/g,'').split(' ');
console.log(words)
console.log(words.length)