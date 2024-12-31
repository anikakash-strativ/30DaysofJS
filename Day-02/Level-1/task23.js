let str = "30 Days Of JavaScript";

// here a is the key. g stands for global ( this is case sensitive) if i is added with g then it is not. 
let searchPattern = /a/g
console.log(str.match(searchPattern))