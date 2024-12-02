const countries = [
    { name: 'Finland', languages: ['Finnish', 'Swedish'] },
    { name: 'Sweden', languages: ['Swedish'] },
    { name: 'Norway', languages: ['Norwegian'] },
    { name: 'USA', languages: ['English'] },
    { name: 'Canada', languages: ['English', 'French'] },
    { name: 'Mexico', languages: ['Spanish'] },
    { name: 'Brazil', languages: ['Portuguese'] },
    { name: 'Russia', languages: ['Russian'] },
    { name: 'China', languages: ['Mandarin'] },
    { name: 'India', languages: ['Hindi', 'English'] },
    { name: 'Germany', languages: ['German'] },
    { name: 'France', languages: ['French'] },
    { name: 'Italy', languages: ['Italian'] },
    { name: 'Spain', languages: ['Spanish'] },
    { name: 'Japan', languages: ['Japanese'] },
    { name: 'South Korea', languages: ['Korean'] },
    { name: 'Argentina', languages: ['Spanish'] },
    { name: 'Colombia', languages: ['Spanish'] },
    { name: 'Egypt', languages: ['Arabic'] },
    { name: 'Turkey', languages: ['Turkish'] },
    { name: 'Iran', languages: ['Persian'] },
    { name: 'Australia', languages: ['English'] },
    { name: 'South Africa', languages: ['Afrikaans', 'English', 'Zulu', 'Xhosa'] },
    { name: 'Saudi Arabia', languages: ['Arabic'] },
    { name: 'Indonesia', languages: ['Indonesian'] },
    { name: 'Thailand', languages: ['Thai'] },
    { name: 'Pakistan', languages: ['Urdu', 'English'] },
    { name: 'Nigeria', languages: ['English', 'Hausa', 'Yoruba', 'Igbo'] },
    { name: 'Kenya', languages: ['Swahili', 'English'] },
    { name: 'Poland', languages: ['Polish'] },
    { name: 'Netherlands', languages: ['Dutch'] },
    { name: 'Belgium', languages: ['Dutch', 'French', 'German'] },
    { name: 'Portugal', languages: ['Portuguese'] },
    { name: 'Switzerland', languages: ['German', 'French', 'Italian', 'Romansh'] },
    { name: 'Greece', languages: ['Greek'] },
    { name: 'Vietnam', languages: ['Vietnamese'] },
    { name: 'Malaysia', languages: ['Malay', 'English'] },
    { name: 'Philippines', languages: ['Filipino', 'English'] },
    { name: 'Chile', languages: ['Spanish'] },
    { name: 'Peru', languages: ['Spanish'] },
    { name: 'Czech Republic', languages: ['Czech'] },
    { name: 'Romania', languages: ['Romanian'] },
    { name: 'Hungary', languages: ['Hungarian'] },
  ];
  
  
const allLanguages = [];

countries.forEach(country => {
    allLanguages.push(...country.languages);
});
const uniqueLanguages = new Set(allLanguages);
console.log('Number of languages: ', uniqueLanguages.size);
// console.log('Number of languages: ', uniqueLanguages);


// 2

function countLanguagesFrequency(countries){
    const languageCounts = {};

    countries.forEach(country => {
        country.languages.forEach(lang =>{
            languageCounts[lang] = (languageCounts[lang] || 0)+1;
        });
    });
    return languageCounts;
}

const languageFrequency  = countLanguagesFrequency(countries);

// console.log(languageFrequency)

const sortedLan = Object.entries(languageFrequency)
                    .map(([language, count]) => ({ [language]: count }))
                    .sort((a,b) => Object.values(b)[0] - Object.values(a)[0]);

console.log(sortedLan.slice(0,10));