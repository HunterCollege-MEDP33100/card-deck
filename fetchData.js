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

async function getCardDataAsync() {
    const response = await fetch('data.json')
    const data = await response.json()
    console.log(data)
    displayData(data)
}

function displayData(data) {
    
    for (let i = 0; i < data.length; i++) {
        const el = document.createElement('div')
        let card1;
        card1.displayCard();

    }
}

getCardDataAsync();