"use strict";
let cardContainer = document.querySelector(".card-container");
let openCards = [];

let cards = [
  {
    source: "assets/theWhiteStripes-elephant.jpg",
    pair: "The White Stripes",
  },
  {
    source: "assets/theWhiteStripes.jpg",
    pair: "The White Stripes",
  },
  {
    source: "assets/theRaconteurs-brokenBoySoldiers.jpg",
    pair: "The Raconteurs",
  },
  {
    source: "assets/theRaconteurs.jpg",
    pair: "The Raconteurs",
  },
  {
    source: "assets/theDeadWeather-dodgeAndBurn.jpg",
    pair: "The Dead Weather",
  },
  {
    source: "assets/theDeadWeather.jpg",
    pair: "The Dead Weather",
  },
  {
    source: "assets/theUpholsterers.jpg",
    pair: "The Upholsterers",
  },
  {
    source: "assets/upholsterers.jpg",
    pair: "The Upholsterers",
  },
  {
    source: "assets/jackWhite-lazaretto.jpg",
    pair: "Jack White",
  },
  {
    source: "assets/jackWhite.jpg",
    pair: "Jack White",
  },
  {
    source: "assets/theGo-watchaDoin.jpg",
    pair: "The Go",
  },
  {
    source: "assets/theGo.jpg",
    pair: "The Go",
  },
];
const randomizeCards = () => {
  let currentIndex = cards.length,
    temporaryValue,
    randomIndex;
  // While there are remaining cards to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining card...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current card.
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
  console.log(cards);
  cards.forEach((item) => {
    let card = document.createElement("div");
    let image = document.createElement("img");
    card.classList.add("card", "card-back");
    card.setAttribute("data-pair", item.pair);
    card.setAttribute("src", item.source);
    let source = card.getAttribute("src");
    // item.style.backgroundImage = source;
    card.style.backgroundImage = source;
    image.src = card.source;
    card.append(image);
    cardContainer.append(card);
  });
  return cards;
};
// to check it works:
const flipCard = (e) => {
  if (e.target.classList.contains("card")) {
    e.target.classList.add(`flip-card`);
    e.target.classList.remove("card-back");
    e.target.classList.add("card-front");
    if (e.target.classList.contains("card-front") && openCards.length <= 1) {
      let pair = e.target.getAttribute(`data-pair`);
      openCards.push(e.target);
      console.log(openCards);
    }
    if (openCards.length === 2) {
      cardContainer.removeEventListener("click", flipCard);
    }
    if (openCards.length === 2) {
      let firstCard = openCards[0].getAttribute(`data-pair`);
      let secondCard = openCards[1].getAttribute(`data-pair`);
      if (firstCard === secondCard) {
        matched();
      } else {
        unmatched();
      }
    }
  }
};

cardContainer.addEventListener("click", flipCard);

let matched = () => {
  setTimeout(() => {
    openCards[0].classList.add(`hidden`);
    openCards[1].classList.add(`hidden`);
    cardContainer.addEventListener("click", flipCard);
    openCards = [];
  }, 1500);
};

let unmatched = () => {
  setTimeout(() => {
    openCards[0].classList.remove(`card-front`);
    openCards[0].classList.add(`card-back`);
    openCards[1].classList.remove(`card-front`);
    openCards[1].classList.add(`card-back`);
    openCards[0].classList.remove(`flip-card`);
    openCards[1].classList.remove(`flip-card`);
    cardContainer.addEventListener("click", flipCard);
    openCards = [];
    console.log(openCards);
  }, 1500);
};

randomizeCards(cards);
console.dir(cards);
console.log(openCards);
