const containerElement = document.querySelector('.container');

class Card {
    constructor(element, artist, image) {
        console.log('Creating a card object...', artist, image, element);
        this.element = element;
        this.artist = artist;
        this.image = image;

        this.element.classList.add('card');

        this.element.innerHTML = '';

        const artistEl = document.createElement('p');
        artistEl.classList.add('artist');
        artistEl.innerText = this.artist;
        this.element.appendChild(artistEl);

        const imageEl = document.createElement('img');
        imageEl.classList.add('image');
        imageEl.src = this.image;
        imageEl.alt = this.artist;
        this.element.appendChild(imageEl);
    }
}

async function getArtistDataAsync() {
    const response = await fetch('data.json');
    const data = await response.json();
    console.log(data);
    displayCards(data);
}

function displayCards(data) {
for (const item of data) {
        const el = document.createElement("div");
        const card = new Card(el, item.artist, item.image);
        containerElement.appendChild(el);
    }
}

getArtistDataAsync();