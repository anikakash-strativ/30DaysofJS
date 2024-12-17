// Task 1:

const firstParagraph = document.querySelector('p');
console.log('This is from exercise 1: ', firstParagraph);


// Task 3:

const paragraphList = document.querySelectorAll('p');

console.log(paragraphList);

for(let i=0; i<paragraphList.length; i++){
    console.log(paragraphList[i].textContent);
}


// Task 5:
paragraphList[3].textContent = "This is p tag four."