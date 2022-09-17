// https://www.omnicalculator.com/conversion/gallons-to-cups-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const cupsRadio = document.getElementById('cupsRadio');
const gallonsRadio = document.getElementById('gallonsRadio');

let cups;
let gallons = v; 

// labels of the inpust
const variable = document.getElementById('variable');

cupsRadio.addEventListener('click', function() {
  variable.textContent = 'Gallons';
  gallons = v;
  result.textContent = '';
});

gallonsRadio.addEventListener('click', function() {
  variable.textContent = 'Cups';
  cups = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(cupsRadio.checked)
    result.textContent = `Cups = ${computecups().toFixed(5)}`;

  else if(gallonsRadio.checked)
    result.textContent = `Gallons = ${computegallons().toFixed(5)}`;
})

// calculation

function computecups() {
  return Number(gallons.value) * 16;
}

function computegallons() {
  return Number(cups.value) / 16;
}