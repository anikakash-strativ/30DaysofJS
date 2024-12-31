let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

itCompanies.forEach(company => {
    console.log(company);
})

console.log("\n")

let searchCompany = "Google";

if(itCompanies.includes(searchCompany)){
    console.log(`${searchCompany} is found.`);
}else{
    console.log(`${searchCompany} is not found.`);
}

console.log("\n \n")

let companiesWithMultipleOs = [];

for(let company of itCompanies){
    let countO = (company.match(/o/g) || []).length;

    if(countO > 1){
        companiesWithMultipleOs.push(company);
    }
}

console.log("Companies with more than one 'o' : ", companiesWithMultipleOs);