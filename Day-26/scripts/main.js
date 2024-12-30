let isSort = false;
const listContainer = document.querySelector('.listOfCountires');
const sortBtn = document.querySelector('.sort_btn');
const startWith = document.querySelector('.starting_letter_btn');
const startWithAny = document.querySelector('.any_letter_btn');
const searchLetter = document.querySelector('.input_form');
const icon = sortBtn.querySelector('i');


function displayCountries(countries) {
    listContainer.innerHTML = '';
    countries.forEach(country => {
        const countryElement = document.createElement('div');
        countryElement.classList.add('country');
        countryElement.textContent = country;
        listContainer.appendChild(countryElement);
    });
}

function sortCountries() {

    const typedLetters = searchLetter.value.toLowerCase();
    const sortedCountries = countries.slice();

    if (isSort) {
        sortedCountries.sort((a, b) => b.localeCompare(a));
    } else {
        sortedCountries.sort((a, b) => a.localeCompare(b));
    }

    const filteredCountries = sortedCountries.filter(country =>
        country.toLowerCase().includes(typedLetters)
    );
    displayCountries(filteredCountries);
}


function sortData() {
    if (!isSort) {
        icon.classList.remove('fa-arrow-up-a-z');
        icon.classList.add('fa-arrow-down-a-z');
        icon.style.transition = 'transform 0.3s ease';
        isSort = true;
        console.log(isSort)
    } else {
        icon.classList.remove('fa-arrow-down-a-z');
        icon.classList.add('fa-arrow-up-a-z');
        icon.style.transition = 'transform 0.3s ease';
        isSort = false;
        console.log(isSort)
    }

    sortCountries();
}


displayCountries(countries);

searchLetter.addEventListener('input', function () {
    sortCountries();
})

function setActiveClass(clickedBtn) {
    startWith.classList.remove('active');
    startWithAny.classList.remove('active');
    sortBtn.classList.remove('active');

    clickedBtn.classList.add('active');
}

startWith.addEventListener('click', () => setActiveClass(startWith));
startWithAny.addEventListener('click', () => setActiveClass(startWithAny));
sortBtn.addEventListener('click', () => setActiveClass(sortBtn));
sortBtn.addEventListener("click", sortData);
