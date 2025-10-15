const containerElement = document.querySelector('.container');

class Card {
  constructor(name, origin, image, colorClass, backInfo) {
    this.name = name;
    this.origin = origin;
    this.image = image;
    this.colorClass = colorClass;
    this.backInfo = backInfo;
  }

  createCardElement() {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    // Front
    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');

    const img = document.createElement('img');
    img.src = this.image;
    img.alt = this.name;

    const colorBar = document.createElement('div');
    colorBar.classList.add('color-bar', this.colorClass);

    const contentFront = document.createElement('div');
    contentFront.classList.add('card-content');

    const nameEl = document.createElement('h2');
    nameEl.textContent = this.name;

    const originEl = document.createElement('p');
    originEl.innerHTML = `<strong>Origin:</strong> ${this.origin}`;

    contentFront.appendChild(nameEl);
    contentFront.appendChild(originEl);

    cardFront.appendChild(img);
    cardFront.appendChild(colorBar);
    cardFront.appendChild(contentFront);

    // Back
    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');

    const backContent = document.createElement('p');
    backContent.textContent = this.backInfo;

    cardBack.appendChild(backContent);

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    return card;
  }
}

// Load GSAP dynamically
const gsapScript = document.createElement('script');
gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
gsapScript.onload = async () => {
    const response = await fetch('data.json');
    const data = await response.json();

    data.forEach(item => {
        const card = new Card(item.name, item.origin, item.image, item.colorClass, item.backInfo);
        const cardElement = card.createCardElement();
        containerElement.appendChild(cardElement);
    });

    // Animate cards
    gsap.from(".card", {
        duration: 1,
        opacity: 0,
        y: 60,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });
};
document.head.appendChild(gsapScript);

