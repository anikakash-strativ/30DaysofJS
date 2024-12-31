let isSort = false;
let isStartWith = false;
const listContainer = document.querySelector('.listOfCountires');
const sortBtn = document.querySelector('.sort_btn');
const startWith = document.querySelector('.starting_letter_btn');
const startWithAny = document.querySelector('.any_letter_btn');
const searchLetter = document.querySelector('.input_form');
const searchNotification = document.querySelector('.searchText');
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

    let typedLetters = searchLetter.value.toLowerCase();

    if (!typedLetters) {
        searchNotification.innerHTML = '';
        displayCountries(countries); // Display all countries when the input is empty
        return;
    }

    const sortedCountries = countries.slice();

    if (isSort) {
        sortedCountries.sort((a, b) => b.localeCompare(a));
    } else {
        sortedCountries.sort((a, b) => a.localeCompare(b));
    }

    const filteredCountries = sortedCountries.filter(country =>
        isStartWith
            ? country.toLowerCase().startsWith(typedLetters)
            : country.toLowerCase().includes(typedLetters)
    );

    isStartWith
        ? searchNotification.innerHTML = `<p>Countries start with ${searchLetter.value} are ${filteredCountries.length}</p>`
        : searchNotification.innerHTML = `<p>Countries contcontaining ${searchLetter.value} are ${filteredCountries.length}</p>`
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





searchLetter.addEventListener('input', function () {
    searchNotification.innerHTML = '';
    sortCountries();
})



function setActiveClass(clickedBtn) {
    startWith.classList.remove('active');
    startWithAny.classList.remove('active');
    sortBtn.classList.remove('active');

    clickedBtn.classList.add('active');
}

startWith.addEventListener('click', () => {
    setActiveClass(startWith);
    isStartWith = true;
});
startWithAny.addEventListener('click', () => {
    setActiveClass(startWithAny);
    isStartWith = false;
});
sortBtn.addEventListener('click', () => {
    setActiveClass(sortBtn);
    sortData();
});


displayCountries(countries);