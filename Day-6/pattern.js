
// Print this pattern
// #
// ##
// ###
// ####
// #####
// ######
// #######

for(let i=1; i<=7; i++){
    let row = "";
    for(let j=1; j<=i; j++){
        row+="#"
    }
    console.log(row)
}
console.log("\n\n")

// Print this 
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for(let i=0; i<=10; i++){
    console.log(`${i} x ${i} = ${i*i}`);
}


