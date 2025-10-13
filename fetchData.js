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
        let card = new Card(data[i].name, data[i].number, data[i].image);
        let cardElement = card.displayCard();
        cardDeckContainer.appendChild(cardElement)

    }

    animateCards()
}

function animateCards() {
    const cards = document.querySelectorAll('.card')
    let tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

    const positions = [
        { x: "25vw", y: "10vh" },
        { x: "45vw", y: "10vh" },
        { x: "65vw", y: "10vh" },
        { x: "20vw", y: "40vh" },
        { x: "40vw", y: "40vh" },
        { x: "60vw", y: "40vh" }
    ];

    gsap.set(cards, { x: "-100%", opacity: 0 });

    tl.to(cards, {
        x: (i) => positions[i].x,
        y: (i) => positions[i].y,
        opacity: 1,
        stagger: 0.5,
        rotate: () => gsap.utils.random(-15, 15)
    }, "+=1")
}
getCardData()