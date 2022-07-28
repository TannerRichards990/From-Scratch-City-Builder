// import functions and grab DOM elements
const cityDropdown = document.getElementById('city-dropdown');
const seasonDropdown = document.getElementById('season-dropdown');
const terrainDropdown = document.getElementById('terrain-dropdown');
const cityEl = document.getElementById('city');
const seasonEl = document.getElementById('season');
const terrainEl = document.getElementById('terrain');
const reportEl = document.getElementById('report');
const slogansEl = document.getElementById('slogans');
const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');

// let state

let cityCount = 0;
let seasonCount = 0;
let terrainCount =0;

const slogans = [];
// set event listeners 

cityDropdown.addEventListener('change', () => {
    const cityType = cityDropdown.value;
    cityCount ++;
    cityEl.style.backgroundImage = `url(./assets/${cityType}.png)`;
    console.log(cityDropdown.value);
    displayStats();
    

});

seasonDropdown.addEventListener('change', () => {
    const seasonType = seasonDropdown.value;
    seasonCount ++;
    seasonEl.style.backgroundImage = `url(./assets/${seasonType}.png)`;
    displayStats();
});

terrainDropdown.addEventListener('change', () => {
    const terrainType = terrainDropdown.value;
    terrainCount ++;
    terrainEl.style.backgroundImage = `url(./assets/${terrainType}.png)`;
    displayStats();


});

sloganButton.addEventListener('click', () => {
    const newSlogan = sloganInput.value;
    slogans.push(newSlogan);
    sloganInput.value = '';
    displaySlogan();

});







  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
