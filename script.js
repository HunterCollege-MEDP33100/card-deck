// insert card elements here
const containerElement = document.querySelector('.container');

class Card {
    constructor(element, hex, code, name) {
        this.element = element;
        
        this.hex = hex;
        this.code = code;
        this.name = name;

        this.element.classList.add('card');
    }

    displayCards() {
        const colorEl = document.createElement('p');
        colorEl.classList.add('color');
        colorEl.style.backgroundColor = this.hex;
        this.element.appendChild(colorEl);
        
        const cardText = document.createElement('p');
        cardText.classList.add('cardText');
        this.element.appendChild(cardText);

        const pantoneLabel = document.createElement('p');
        pantoneLabel.classList.add('pantone');
        pantoneLabel.innerText = "PANTONE";
        cardText.appendChild(pantoneLabel);

        const regSym = document.createElement('span');
        regSym.classList.add('reg');
        regSym.innerText = "®";
        pantoneLabel.appendChild(regSym)

        const codeEl = document.createElement('p');
        codeEl.classList.add('code');
        codeEl.innerText = this.code;
        cardText.appendChild(codeEl);

        const nameEl = document.createElement('p');
        nameEl.classList.add('name');
        nameEl.innerText = this.name;
        cardText.appendChild(nameEl);
    }
}

function getCardData() {
    fetch('data.json')
        .then(function(response) {
            return response.json();
        })
        .then(data => {
            console.log(data);
            displayData(data);
        });
}

function displayData(data) {
    for (let i = 0; i < data.length; i++) {
        const cardElement = document.createElement('div');
        const card1 = new Card(cardElement, data[i].hex, data[i].code, data[i].name);
        card1.displayCards();
        containerElement.appendChild(cardElement);
    }
}

getCardData();