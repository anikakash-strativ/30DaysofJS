let str = "You cannot end a sentence with because because because is a conjunction";

let pattern = /because/gi;

let cnt = str.match(pattern);

console.log(cnt.length)