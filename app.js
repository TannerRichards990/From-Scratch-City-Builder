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

const Slogans = [];
// set event listeners 

cityDropdown.addEventListener('change', () => {
    const cityType = cityDropdown.value;
    cityCount ++;
    

})






  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
