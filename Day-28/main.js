let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let country = document.getElementById('country');
let score = document.getElementById('playerScore');
const btn = document.querySelector('.addPlayer');
const alart = document.querySelector('.alart');
const leaderBoard = document.querySelector('.leaderBoard');

btn.addEventListener("click", () => {
    console.log("First Name:", firstName.value);
    console.log("Last Name:", lastName.value);
    console.log("Country:", country.value);
    console.log("Player Score:", score.value);
    if (firstName.value === '' || lastName.value === '' || country.value === '' || score.value === '') {
        alart.innerHTML = '<p>All Fields are required.</p>'
    }
    else {
        const card = document.createElement('div');
        card.classList.add('card');

        // Name Section
        const name = document.createElement('div');
        name.classList.add('name');
        name.innerHTML = `
        <h3>${firstName.value} ${lastName.value}</h3>
        <p>${getFormattedDateTime()}</p>
        `
        card.appendChild(name);


        // Country section
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>${country.value}</h3>
        `
        card.appendChild(countryDiv);



        // Score section:
        const scoreDiv = document.createElement('div');
        scoreDiv.classList.add('score');
        scoreDiv.innerHTML = `<h3>${score.value}</h3>`

        card.appendChild(scoreDiv);

        // Score CRUD Section
        const scoreCrud = document.createElement('div');
        scoreCrud.classList.add('scoreCrud');

        // Delete button
        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete')
        deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`

        scoreCrud.appendChild(deleteButton);
        card.appendChild(scoreCrud);

        // add
        const addButton = document.createElement('button')
        addButton.classList.add('add')
        addButton.innerText = `+ 5`

        scoreCrud.appendChild(addButton);
        card.appendChild(scoreCrud);

        // sub

        const subButton = document.createElement('button')
        subButton.classList.add('sub')
        subButton.innerText = `- 5`

        scoreCrud.appendChild(subButton);
        card.appendChild(scoreCrud);


        leaderBoard.appendChild(card);
    }
})

const getFormattedDateTime = () => {
    const now = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    }).format(now);

    return formattedDate;
}