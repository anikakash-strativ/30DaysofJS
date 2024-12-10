function tenMostFrequentWords(paragraph) {
    // remove all punctuation mark and make small letters.
    const words = paragraph
        .replace(/[.,]/g, '') 
        .toLowerCase()
        .split(/\s+/); 

    // Create a frequency map for the words
    const wordCount = {};
    for (const word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    const sortedWords = Object.entries(wordCount)
        .map(([word, count]) => ({ word, count }))
        .sort((a, b) => b.count - a.count); 

    return sortedWords.slice(0, 10);
}

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
console.log(tenMostFrequentWords(paragraph));
