// Task 2&6:
const paragraphs = document.querySelectorAll('p');
for(let i=0; i<paragraphs.length; i++){
    paragraphs[i].setAttribute('id', 'id'+(i+1));
    paragraphs[i].setAttribute('class', 'class'+(i+1));
}


const para1 = document.querySelector('#id1');
const para2 = document.querySelector('#id2');
const para3 = document.querySelector('#id3');
const para4 = document.querySelector('#id4');

console.log('This is from exercise 2: ', para1);
console.log('This is from exercise 2: ', para2);
console.log('This is from exercise 2: ', para3);
console.log('This is from exercise 2: ', para4);