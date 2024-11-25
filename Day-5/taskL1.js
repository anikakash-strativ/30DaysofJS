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