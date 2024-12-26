
const len = countries_data.length;
console.log(`Number of countries: ${len}`);

const country_len = document.getElementById('country_len');
country_len.innerText = len;

const btn_languages = document.getElementById('btn_languages');
const btn_population = document.getElementById('btn_population');
const most_item = document.getElementById('most_item');
const result = document.getElementById('result');


const findTopTenLanguages = () => {
    const allLanguages = countries_data
        .map(country => country.languages)
        .flat();

    const languageCounts = allLanguages.reduce((acc, language) => {
        acc[language] = (acc[language] || 0) + 1;
        return acc;
    }, {});

    const topLanguages = Object.entries(languageCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);


    most_item.innerText = "Languages";
    result.innerHTML = topLanguages.map(([language, count]) => {
        const percentage = (count / len) * 100;
        return `
            <div class="resDiv">
                <label>${language}: </label>
                <progress value="${percentage}" max="100"></progress>
                <lable>${count}</lable>
            </div>
        `;
    }).join('');
};


const findTopPopulations = () => {
    const sortedCountries = countries_data
        .sort((a, b) => b.population - a.population)
        .slice(0, 10);

    const topPopulations = sortedCountries.map(country => ({
        name: country.name,
        population: country.population
    }));


    most_item.innerText = "Populated Countries";
    result.innerHTML = topPopulations.map(country => {
        const percentage = (country.population / sortedCountries[0].population) * 100;
        return `
            <div class="resDiv">
                <label>${country.name}: </label>
                <progress value="${percentage}" max="100"></progress>
                <label>${country.population}</label>
            </div>
        `;
    }).join('');
};


btn_languages.addEventListener("click", findTopTenLanguages);
btn_population.addEventListener("click", findTopPopulations);
