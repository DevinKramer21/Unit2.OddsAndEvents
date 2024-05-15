
const form = document.querySelector('form');
const input = document.querySelector('input[name="number"]');
const numberBankOutput = document.querySelector('#numberBank output');
const oddsOutput = document.querySelector('#odds output');
const evensOutput = document.querySelector('#evens output');
const sortOneButton = document.querySelector('#sortOne');
const sortAllButton = document.querySelector('#sortAll');


let numberBank = [];


function updateNumberBankDisplay() {
    numberBankOutput.textContent = numberBank.join(', ');
}


function updateOddsDisplay() {
    const odds = numberBank.filter(num => num % 2 !== 0);
    oddsOutput.textContent = odds.join(', ');
}


function updateEvensDisplay() {
    const evens = numberBank.filter(num => num % 2 === 0);
    evensOutput.textContent = evens.join(', ');
}


form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputValue = parseInt(input.value);
    if (!isNaN(inputValue)) {
        numberBank.push(inputValue);
        updateNumberBankDisplay();
        input.value = '';
    }
});

sortOneButton.addEventListener('click', function () {
    if (numberBank.length > 0) {
        const number = numberBank.shift();
        if (number % 2 !== 0) {
            oddsOutput.textContent += (oddsOutput.textContent === '' ? '' : ', ') + number;
        } else {
            evensOutput.textContent += (evensOutput.textContent === '' ? '' : ', ') + number;
        }
        updateNumberBankDisplay();
    }
});

sortAllButton.addEventListener('click', function () {
    while (numberBank.length > 0) {
        const number = numberBank.shift();
        if (number % 2 !== 0) {
            oddsOutput.textContent += (oddsOutput.textContent === '' ? '' : ', ') + number;
        } else {
            evensOutput.textContent += (evensOutput.textContent === '' ? '' : ', ') + number;
        }
    }
    updateNumberBankDisplay();
});

