// insert card elements here
const containerElement = document.querySelector('.container');

class Card {
    // your code goes here
    constructor(id, name, types, lore, image) {
        this.id = id;
        this.name = name;
        this.types = types;
        this.lore = lore;
        this.image = image;
    }

    // add your class functions here
}

function getData() {
    // your code goes here
    fetch('data.json')
        // turn the json file into a javascript object
        .then(function(response) {
            return response.json();
        })
        // do stuff with the javascript object
        .then(data => {
            console.log(data);
            displayCards(data);
        });
}

function displayCards(cards) {
    // your code goes here
    this.element.innerHTML = '';
    
    const titleEl = document.createElement('p');
    titleEl.classList.add('book_title');
    titleEl.innerText = this.title;
    this.element.appendChild(titleEl);
    // console.log(titleEl);

    const authorEl = document.createElement('p');
    authorEl.classList.add('book_author');
    authorEl.innerText = this.author;
    this.element.appendChild(authorEl);
    // console.log(authorEl);

    if (this.numCopies) {
        const numCopiesEl = document.createElement('p');
        numCopiesEl.classList.add('book_num_copies');
        numCopiesEl.innerText = this.numCopies;
        // console.log(numCopiesEl);
        this.element.appendChild(numCopiesEl);
    }
}

// call your functions here


