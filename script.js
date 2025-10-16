// insert card elements here
const containerElement = document.querySelector('.container');

class Card {
    // your code goes here
    constructor(number, image, name) {
        this.name = name;
        this.number = number;
        this.image = image;

        this.element = document.createElement('div');
        this.element.classList.add('card');
    }

    // add your class functions here
    displayCards() {
        const numberEl = document.createElement('h2');
        numberEl.classList.add('number');
        numberEl.innerText = this.number;
        this.element.appendChild(numberEl);
            //console.log(numberEl);
        const imageEl = document.createElement('img');
        imageEl.classList.add('art');
        imageEl.src = this.image;
        this.element.appendChild(imageEl);
            //console.log(imageEl);
        const nameEl = document.createElement('p');
        nameEl.classList.add('name');
        nameEl.innerText = this.name;
        this.element.appendChild(nameEl);
            //console.log(nameEl);
    }
}

async function getData() {

    const response = await fetch('data.json');
    const cards = await response.json();
    console.log(cards);
    displayCards(cards);
}

function displayCards(cards) {

    for (let i = 0; i < cards.length; i++){
        const element = document.createElement('div');
        let card1 = new Card(cards[i].number, cards[i].image, cards[i].name);
        card1.displayCards();
        containerElement.appendChild(card1.element);
    }
}

// call your functions here
getData();


