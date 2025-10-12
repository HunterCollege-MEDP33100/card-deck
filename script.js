class ImageCard {
  constructor(title, imageUrl) {
    this.title = title;
    this.imageUrl = imageUrl;
  }

  render() {
    const card = document.createElement('div');
    card.className = 'card';

    const inner = document.createElement('div');
    inner.className = 'card-inner';

    const front = document.createElement('div');
    front.className = 'card-front';

    const back = document.createElement('div');
    back.className = 'card-back';

    const img = document.createElement('img');
    img.src = this.imageUrl;
    img.alt = this.title;

    const titleElem = document.createElement('h3');
    titleElem.textContent = this.title;

    back.appendChild(img);
    back.appendChild(titleElem);

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    // Flip on click
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });

    return card;
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

async function loadCards() {
  try {
    const response = await fetch('data.json');
    let data = await response.json();

    // Shuffle the data
    data = shuffleArray(data);

    const container = document.getElementById('card-container');

    // Display at least 5 cards
    data.slice(0, 5).forEach((item) => {
      const card = new ImageCard(item.title, item.image);
      container.appendChild(card.render());
    });
  } catch (error) {
    console.error('Error loading JSON:', error);
  }
}

loadCards();
