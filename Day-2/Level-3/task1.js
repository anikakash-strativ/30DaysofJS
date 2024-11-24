let str = "Love is the best thing in this world. Some found their love and some are still looking for their love."

// let pattern = /love/gi;
let needStr = str.match(/love/gi)

console.log(`Number of 'love' count is : ${needStr.length}`)