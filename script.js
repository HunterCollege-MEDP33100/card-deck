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
        this.name = artistData.name;
        this.number = artistData.number;
        this.image = artistData.image;
        this.nationality = artistData.nationality; 
    }

    createCardElement() {
        const card = document.createElement('div');
        card.classList.add('artist-card');

        const numberEl = document.createElement('div');
        numberEl.classList.add('artist-number');
        numberEl.textContent = this.number;

        const img = document.createElement('img');
        img.src = this.image;
        img.alt = this.name;

        const name = document.createElement('h2');
        name.textContent = this.name;

        
        const nationality = document.createElement('p');
        nationality.classList.add('artist-nationality');
        nationality.textContent = this.nationality || '';

        card.appendChild(numberEl);
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(nationality);

        return card;
    }
}

function getData() {
    // your code goes here
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            displayCards(data);
        })
        .catch(error => console.error('Error loading JSON:', error));
}

function displayCards(cards) {
    // your code goes here
    containerElement.innerHTML = '';

    [...cards].reverse().forEach(artistData => {
        const card = new Card(artistData);
        const cardElement = card.createCardElement();
        containerElement.appendChild(cardElement);
    });

    updateCardStack();

    // Right arrow - slide out top card
    rightArrow.addEventListener('click', () => {
        const topCard = containerElement.lastElementChild;
        if (topCard) {
            animateCard(topCard, 'right', () => {
                containerElement.insertBefore(topCard, containerElement.firstElementChild);
                updateCardStack();
            });
        }
    });

    // Left arrow - bring last card back with reverse animation (from right) and place it on top
    leftArrow.addEventListener('click', () => {
        const bottomCard = containerElement.firstElementChild;
        if (bottomCard) {
            bottomCard.style.zIndex = containerElement.children.length + 5; // bring to front
            containerElement.appendChild(bottomCard);
            animateCard(bottomCard, 'return-right', () => {
                bottomCard.style.zIndex = ''; 
                updateCardStack();
            });
        }
    });
}


function updateCardStack() {
    const cards = Array.from(containerElement.children);
    const total = cards.length;

    cards.forEach((card, index) => {
        const offset = total - index - 1;
        card.style.transform = `translateY(${offset * 12}px) rotate(${offset * -4}deg) scale(${1 - offset * 0.05})`;
        card.style.zIndex = index;
        card.style.opacity = 1;
    });
}

// Animate card
function animateCard(cardElement, direction, onAnimationEnd) {
    if (direction === 'right') {
        cardElement.classList.add('slide-out-right');
    } else if (direction === 'return-right') {
        cardElement.classList.add('slide-in-right');
    }

    cardElement.addEventListener('animationend', function handler() {
        cardElement.classList.remove('slide-out-right', 'slide-in-right');
        onAnimationEnd();
        cardElement.removeEventListener('animationend', handler);
    });
}

// call your functions here
getData();


