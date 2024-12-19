// Task 1:

const countriesAPI = 'https://restcountries.com/v2/all'


fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        data.forEach(({name, capital, languages, population, area}) =>{

                  capital = capital  || 'No Captial';
            const languageNames  =languages.map(lang => lang.name).join(', ');


            console.log(`Country: ${name}`);
            console.log(`Capital: ${capital}`);
            console.log(`Languages: ${languageNames }`);
            console.log(`Population: ${population}`);
            console.log(`Area: ${area} km²`);
            console.log('-------------------');
        })
    })
    .catch(error => console.error('Error fetching data:', error))


// Task 2:

const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        data.forEach(({name}) => {

            console.log(`Name of a Cat : ${name}`)
            console.log('-------------------');
        })
    })
    .catch(error => console.error('Error fetching data:', error))


// Task 3:


// SUB Task 1:

fetch(catsAPI)
    .then(response => response.json())
    .then(data => {

        data.forEach(cat => {
            const weightMetric = cat.weight.metric;
            const [min, mx] = weightMetric.split(' - ').map(Number);
            const averageWeight = (min+mx)/2;

            console.log(`Name: ${cat.name}`);
            console.log(`Average Weight: ${averageWeight} kg`);
            console.log('-------------------');
        })
    })
    .catch()


// SUB Task 2:
fetch(countriesAPI)
    .then(response => response.json())
    .then(countryData =>{
        const sortedCountries = countryData
              .filter(country => country.area)
              .sort((a,b)=> b.area - a.area);
        const to10LagestCountry = sortedCountries.slice(0,10);

        console.log("To 10 Lagest Countries by area: ");
        to10LagestCountry.forEach((country, index)=>{
            console.log(`${index+1}. ${country.name} - ${country.area} km²`)
        })
    })
    .catch(error => console.error('Error:', error))

// Sub Task 3:

// Just store the language in a set. 
