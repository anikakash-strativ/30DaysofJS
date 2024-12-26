const input = document.getElementById("number");
const btn = document.getElementById("btn");
const select = document.getElementById("select");
const resultSpan = document.getElementById("result");
const resultDiv = document.querySelector(".result")

const planetName = document.getElementById("planet-name");
const img = document.getElementById("img");
const resultArea = document.querySelector(".planet-gravity-area");
const resultName = document.querySelector(".resultName");
const alrtText1 = document.getElementById("warning1");
const alrtText2 = document.getElementById("warning2");

img.src = 'images/earth.png';
resultArea.style.display = 'none'

btn.addEventListener("click", click);
console.log(select.value)

function click() {
    const objectWeightValue = input.value.trim();

    if (!objectWeightValue) {
        img.style.display = 'none';
        resultDiv.style.display = 'none';
        resultArea.style.display = 'flex';
        alrtText2.style.display = 'none';
        alrtText1.innerHTML = `<p>Mass is required.</p>`
        return;
    }
    if (select.value === 'Select Planet') {
        img.style.display = 'none';
        resultDiv.style.display = 'none';
        resultArea.style.display = 'flex';
        alrtText2.style.display = 'none';
        alrtText1.innerHTML = `<p>Planet is required.</p>`
        return;
    }





    const objectWeight = parseFloat(objectWeightValue);
    const selected = select.value;
    const gravity = getGravity(selected);
    const weight = calculateWeight(objectWeight, gravity);

    resultSpan.innerHTML = `<span>${weight.toFixed(2)} N</span>`
    planetName.innerHTML = `<span>${selected}</span>`;
    img.src = `images/${selected}.png`;
    function getGravity(selected) {
        const gravityMap = {
            mercury: 3.7,
            venus: 8.87,
            earth: 9.81,
            mars: 3.71,
            jupiter: 24.79,
            saturn: 10.44,
            uranus: 8.69,
            neptune: 11.15,
            moon: 1.62,
            pluto: 0.62
        };

        return gravityMap[selected];
    }

    function calculateWeight(objectWeight, gravity) {
        return objectWeight * gravity;
    }

    alrtText1.innerHTML = ""
    img.style.display = 'block';
    resultArea.style.display = 'flex';
    resultDiv.style.display = 'flex';
    resultName.style.display = 'block';
    alrtText2.style.display = 'block';
}