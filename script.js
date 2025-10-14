// insert card elements here
const containerElement = document.querySelector('.container');

class Card {
    constructor(element, code, name, image) {
        this.element = element;
        
        this.image = image;
        this.code = code;
        this.name = name;

        this.element.classList.add('card');
    }

    displayCards() {
        const imageEl = document.createElement('p');
        imageEl.classList.add('image');
        imageEl.innerText = this.image;
        this.element.appendChild(imageEl);
        
        const pantoneLabel = document.createElement('p');
        pantoneLabel.innerText = "PANTONE";
        this.element.appendChild(pantoneLabel);

        const codeEl = document.createElement('p');
        codeEl.classList.add('code');
        codeEl.innerText = this.code;
        this.element.appendChild(codeEl);

        const nameEl = document.createElement('p');
        nameEl.classList.add('name');
        nameEl.innerText = this.name;
        this.element.appendChild(nameEl);
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
        const card1 = new Card(cardElement, data[i].code, data[i].name, data[i].image);
        card1.displayCards();
        containerElement.appendChild(cardElement);
    }
}

getCardData();