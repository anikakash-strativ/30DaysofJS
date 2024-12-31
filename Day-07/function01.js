// 2 (1-3)
function fullName(firstName, lastName){
    return firstName + " " + lastName;
}

console.log(fullName("anik", "akash"))

// 4 ()

function areaOfRectangle(length, width) {
    return length * width;
}

console.log(areaOfRectangle(5, 10));


// 13

function BMICal(weight, height){
    const bmi = weight / (height*height);
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    return {bmi : bmi.toFixed(2), category}
}


console.log(BMICal(87,1.72 ))

// 14

function checkSeason(month) {
    if (['December', 'January', 'February'].includes(month)) {
        return "Winter";
    } else if (['March', 'April', 'May'].includes(month)) {
        return "Spring";
    } else if (['June', 'July', 'August'].includes(month)) {
        return "Summer";
    } else if (['September', 'October', 'November'].includes(month)) {
        return "Autumn";
    } else {
        return "Invalid month";
    }
}

console.log(checkSeason("March")); 
