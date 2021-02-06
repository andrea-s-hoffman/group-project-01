"use strict";
let cardContainer = document.querySelector(".card-container");
let openCards = [];
let startButton = document.querySelector(".start-button");
let popUpWindow = document.querySelector(".start-end-popup");

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
    let cardParent = document.createElement("div");
    cardParent.classList.add(`flip-card`);
    let cardInner = document.createElement(`div`);
    cardInner.classList.add(`flip-card-inner`);
    let cardFront = document.createElement("div");
    cardFront.classList.add("flip-card-front");
    let frontImage = document.createElement("img");
    frontImage.classList.add(`front-image`);
    cardFront.setAttribute("data-pair", item.pair);
    frontImage.src = "assets/tmr-logo.jpg";
    let cardBack = document.createElement("div");
    cardBack.classList.add("flip-card-back");
    let backImage = document.createElement("img");
    backImage.classList.add("back-image");
    backImage.src = item.source;
    cardBack.append(backImage);
    cardFront.append(frontImage);
    cardInner.append(cardFront, cardBack);
    cardParent.append(cardInner);
    cardContainer.append(cardParent);
  });
};

randomizeCards();
// to check it works:
// const flipCard = (e) => {
//   if (e.target.classList.contains("card")) {
//     e.target.classList.add(`flip-card`);
//     e.target.classList.remove("card-back");
//     e.target.classList.add("card-front");
//     if (e.target.classList.contains("card-front") && openCards.length <= 1) {
//       let pair = e.target.getAttribute(`data-pair`);
//       openCards.push(e.target);
//       console.log(openCards);
//     }
//     if (openCards.length === 2) {
//       cardContainer.removeEventListener("click", flipCard);
//     }
//     if (openCards.length === 2) {
//       let firstCard = openCards[0].getAttribute(`data-pair`);
//       let secondCard = openCards[1].getAttribute(`data-pair`);
//       if (firstCard === secondCard) {
//         matched();
//       } else {
//         setTimeout(() => {
//           e.target.classList.add("unmatched");
//           e.target.classList.remove("flip-card");
//         }, 1500);
//         unmatched();
//       }
//     }
//   }
// };

// cardContainer.addEventListener("click", flipCard);

// let matched = () => {
//   setTimeout(() => {
//     openCards[0].classList.add(`hidden`);
//     openCards[1].classList.add(`hidden`);
//     cardContainer.addEventListener("click", flipCard);
//     openCards = [];
//   }, 1500);
// };

// let unmatched = () => {
//   setTimeout(() => {
//     openCards[0].classList.remove(`card-front`);
//     openCards[0].classList.add(`card-back`);
//     openCards[1].classList.remove(`card-front`);
//     openCards[1].classList.add(`card-back`);
//     openCards[0].classList.add(`flip-card`);
//     openCards[1].classList.add(`flip-card`);
//     cardContainer.addEventListener("click", flipCard);
//     openCards = [];
//     console.log(openCards);
//   }, 1500);
// };

// randomizeCards(cards);
// console.dir(cards);
// console.log(openCards);

// popUpWindow.addEventListener("submit", (event) => {
//   event.preventDefault();
//   popUpWindow.classList.add("disable-popup");
// });
