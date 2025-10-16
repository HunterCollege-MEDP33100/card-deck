class Card {
    constructor(name, type, emoji) {
        this.name = name;
        this.type = type;
        this.emoji = emoji;
    }

    createCardElement() {
        const card = document.createElement('div');
        card.classList.add('card');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('card-image-container');
        imageContainer.textContent = this.emoji;

        const title = document.createElement('h2');
        title.textContent = this.name;

        const subtitle = document.createElement('p');
        subtitle.textContent = this.type;

        card.appendChild(imageContainer);
        card.appendChild(title);
        card.appendChild(subtitle);

        return card;
    }
}

const planetsData = [
    { name: "Mercury", type: "Terrestrial Planet", emoji: "☿️" },
    { name: "Venus", type: "Terrestrial Planet", emoji: "♀️" },
    { name: "Earth", type: "Terrestrial Planet", emoji: "🌍" },
    { name: "Jupiter", type: "Gas Giant", emoji: "♃" },
    { name: "Saturn", type: "Gas Giant", emoji: "♄" }
];


const deckContainer = document.getElementById('deck');

planetsData.forEach((planet, index) => {
    const planetCard = new Card(planet.name, planet.type, planet.emoji);
    const cardElement = planetCard.createCardElement();
    deckContainer.appendChild(cardElement);

    cardElement.style.opacity = '0';
    cardElement.style.transform = 'translateY(50px)';
    
    setTimeout(() => {
        cardElement.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
        cardElement.style.opacity = '1';
        cardElement.style.transform = 'translateY(0)';
    }, index * 150);

    
    cardElement.addEventListener('click', () => {
        cardElement.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
        cardElement.style.transform = 'rotateY(360deg)';
        
        setTimeout(() => {
            cardElement.style.transform = 'rotateY(0deg)';
        }, 600);
    });
});