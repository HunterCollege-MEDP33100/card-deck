// insert card elements here
const containerElement = document.querySelector('.container');

// Create arrow buttons dynamically
const controls = document.createElement('div');
controls.classList.add('controls');

const leftArrow = document.createElement('button');
leftArrow.classList.add('arrow', 'left-arrow');
leftArrow.textContent = '←';

const rightArrow = document.createElement('button');
rightArrow.classList.add('arrow', 'right-arrow');
rightArrow.textContent = '→';

controls.appendChild(leftArrow);
controls.appendChild(rightArrow);
document.body.appendChild(controls);

class Card {
    // your code goes here
    constructor(artistData) {
        // Store artist information
        this.name = artistData.name;
        this.number = artistData.number;
        this.image = artistData.image;
    }

    createCardElement() {
        // Create the card container
        const card = document.createElement('div');
        card.classList.add('artist-card');

        // Create number element (top of the card)
        const numberEl = document.createElement('div');
        numberEl.classList.add('artist-number');
        numberEl.textContent = this.number;

        // Create and set the image
        const img = document.createElement('img');
        img.src = this.image;
        img.alt = this.name;

        // Create the name text
        const name = document.createElement('h2');
        name.textContent = this.name;

        // Append children
        card.appendChild(numberEl);
        card.appendChild(img);
        card.appendChild(name);

        return card;
    }
}

function getData() {
    // your code goes here
    // Fetch data from the JSON file
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Convert JSON into array of JS objects and loop through it
            displayCards(data);
        })
        .catch(error => console.error('Error loading JSON:', error));
}

function displayCards(cards) {
    // your code goes here
    // Clear container
    containerElement.innerHTML = '';

    [...cards].reverse().forEach(artistData => {
        const card = new Card(artistData);
        const cardElement = card.createCardElement();


        containerElement.appendChild(cardElement);
    });

    
    rightArrow.addEventListener('click', () => {
        const topCard = containerElement.lastElementChild;
        if (topCard) {
            moveCardToBack(topCard);
        }
    });
}
function moveCardToBack(cardElement) {
    cardElement.style.zIndex = 0;
    cardElement.classList.add('to-back');

    setTimeout(() => {
        containerElement.insertBefore(cardElement, containerElement.firstElementChild);
        cardElement.classList.remove('to-back');
    }, 400);
}

// call your functions here
getData();


