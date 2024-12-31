const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let cleanSentence = sentence.replace(/[^a-zA-Z0-9\s]/g, '');

// console.log('Cleaned Sentence: ', cleanSentence);

let wordCollection = cleanSentence.split(/\s+/);

let wordCnt = {};


wordCollection.forEach(word => {
    wordCnt[word] = (wordCnt[word] || 0) + 1;
});

let maxCnt = 0, mostFrekWord = "";

for (let word in wordCnt) {
    if (wordCnt[word] > maxCnt) {
        maxCnt = wordCnt[word];
        mostFrekWord = word;
    }
}

console.log('Most Freq Word: ', mostFrekWord);
console.log('Frequency: ', maxCnt);
