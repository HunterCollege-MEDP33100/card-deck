function getCardData() {
    fetch('data.json')
        .then(function (response) {
            return response.json();
        })

        .then(data => {
            console.log(data);
            displayData(data);
        })
}


function displayData(data) {

    const cardDeckContainer = document.getElementById('card-deck')

    for (let i = 0; i < data.length; i++) {
        const el = document.createElement('div')
        let card1 = new Card(data[i].name,data[i].number,data[i].image);
        let cardElement = card1.displayCard();
        cardDeckContainer.appendChild(cardElement)

    }


}

getCardData()