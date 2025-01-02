let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let country = document.getElementById('country');
let score = document.getElementById('playerScore');
const btn = document.querySelector('.addPlayer');
const alart = document.querySelector('.alart');
const leaderBoard = document.querySelector('.leaderBoard');
const loader = document.getElementById('loader');

let players = []; 

const showLoader = (renderBoardCallBack)=>{
    loader.style.display = 'block';
    leaderBoard.style.display = 'none';
    setTimeout(() =>{
        loader.style.display = 'none';
        leaderBoard.style.display = 'flex';
        renderBoardCallBack();
    }, 1000);
}
btn.addEventListener("click", () => {
    if (firstName.value === '' || lastName.value === '' || country.value === '' || score.value === '') {
        alart.innerHTML = '<p>All Fields are required.</p>';
        return;
    }

    alart.innerHTML = ''; 

    
    const player = {
        id: Date.now(), 
        name: `${firstName.value} ${lastName.value}`,
        country: country.value,
        score: parseInt(score.value),
        date: getFormattedDateTime()
    };
    players.push(player);


    firstName.value = '';
    lastName.value = '';
    country.value = '';
    score.value = '';

    showLoader(renderLeaderboard); 
});

const renderLeaderboard = () => {
    leaderBoard.innerHTML = ''; 

    players.sort((a, b) => b.score - a.score);

    players.forEach(player => {
        const card = document.createElement('div');
        card.classList.add('card');

        // Name Section
        const name = document.createElement('div');
        name.classList.add('name');
        name.innerHTML = `
            <h3>${player.name}</h3>
            <p>${player.date}</p>
        `;
        card.appendChild(name);

        // Country Section
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `<h3>${player.country}</h3>`;
        card.appendChild(countryDiv);

        // Score Section
        const scoreDiv = document.createElement('div');
        scoreDiv.classList.add('score');
        scoreDiv.innerHTML = `<h3>${player.score}</h3>`;
        card.appendChild(scoreDiv);

        // Score CRUD Section
        const scoreCrud = document.createElement('div');
        scoreCrud.classList.add('scoreCrud');

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        deleteButton.addEventListener('click', () => {
            players = players.filter(user => user.id !== player.id); 
            showLoader(renderLeaderboard); 
        });

        // Add +5 button
        const addButton = document.createElement('button');
        addButton.classList.add('add');
        addButton.innerText = `+ 5`;
        addButton.addEventListener('click', () => {
            console.log(player)
            player.score += 5; 
            showLoader(renderLeaderboard); 
        });

        // Subtract -5 button
        const subButton = document.createElement('button');
        subButton.classList.add('sub');
        subButton.innerText = `- 5`;
        subButton.addEventListener('click', () => {
            player.score -= 5; 
            showLoader(renderLeaderboard); 
        });

        scoreCrud.appendChild(addButton);
        scoreCrud.appendChild(subButton);
        scoreCrud.appendChild(deleteButton);
        card.appendChild(scoreCrud);

        leaderBoard.appendChild(card);
    });
};


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
};
