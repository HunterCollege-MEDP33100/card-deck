const cardDeck = document.querySelector('.card-deck')

class Card {
    constructor(deck, name, number, image) {
        console.log('Creating card object...', name, number, image)

        this.name = name;
        this.number = number;
        this.image = image;

        this.element = document.createElement('div');
        this.element.classList.add('card');
    }

    displayCard() {
        this.element.innerHTML = '';

        const nameEl = document.createElement('p');
        nameEl.classList.add('card-name');
        nameEl.innerText = this.name;
        this.element.appendChild(nameEl)
        console.log(nameEl)

        const numberEl = document.createElement('p');
        numberEl.classList.add('card-number');
        numberEl.innerText = this.number;
        this.element.appendChild(numberEl);
        console.log(numberEl);

        const imageEl = document.createElement('img');
        imageEl.classList.add('card-image');
        imageEl.src = 'images/${this.image}'
        this.element.appendChild(this.image)
        console.log(imageEl)

        return this.element
    }
}