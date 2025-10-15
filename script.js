// insert card elements here
const containerElement = document.querySelector('.container');

class Card {
    // your code goes here
    constructor(artistData) {
        // Store artist information
        this.name = artistData.name;
        this.image = artistData.image;
    }

    createCardElement() {
        // Create the card container
        const card = document.createElement('div');
        card.classList.add('artist-card');

        // Create and set the image
        const img = document.createElement('img');
        img.src = this.image;
        img.alt = this.name;

        // Create the name text
        const name = document.createElement('h2');
        name.textContent = this.name;

        // Append children
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
            displayCards(data);
        })
        .catch(error => console.error('Error loading JSON:', error));
}

function displayCards(cards) {
    // your code goes here
    // Clear container
    containerElement.innerHTML = '';

    // call your functions here
    // Create card elements and append to container
    cards.forEach(artistData => {
        const card = new Card(artistData);
        const cardElement = card.createCardElement();

        // Add deck behavior on click
        cardElement.addEventListener('click', () => {
            cardElement.style.zIndex = 0;
            cardElement.classList.add('to-back');

            setTimeout(() => {
                containerElement.appendChild(cardElement);
                cardElement.classList.remove('to-back');
            }, 400);
        });

        containerElement.appendChild(cardElement);
    });
}

// call your functions here
getData();
