"use strict";
let cardContainer = document.querySelector(".card-container");
let openCards = [];

let cards = [
  {
    source: "",
    pair: "The White Stripes",
  },
  {
    source: "",
    pair: "The White Stripes",
  },
  {
    source: "",
    pair: "The Raconteurs",
  },
  {
    source: "",
    pair: "The Raconteurs",
  },
  {
    source: "",
    pair: "The Dead Weather",
  },
  {
    source: "",
    pair: "The Dead Weather",
  },
  {
    source: "",
    pair: "The Upholsterers",
  },
  {
    source: "",
    pair: "The Upholsterers",
  },
  {
    source: "",
    pair: "Jack White",
  },
  {
    source: "",
    pair: "Jack White",
  },
  {
    source: "",
    pair: "The Go",
  },
  {
    source: "",
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
  cards.forEach((card) => {
    card = document.createElement("div");
    card.classList.add("card", "card-back");
    card.setAttribute("pair", pair);
    cardContainer.append(card);
  });
  return cards;
};
// to check it works:
const flipCard = (e) => {
  if (e.target.classList.contains("card")) {
    e.target.classList.add(`flip-card`);
    setTimeout(() => {
      e.target.classList.remove("card-back");
      e.target.classList.add("card-front");
      if (e.target.classList.contains("card-front") && openCards.length <= 1) {
        openCards.push(e.target);
      }
    }, 350);
  }
};
cardContainer.addEventListener("click", flipCard);

// const cardMatch = () => {
//   cardContainer.forEach((e) => {
//     // if (e.target.pair === pair) {
//     //   setTimeout(() => {
//     //     e.target.classList.add("hidden");
//     //   }, 1000);
//     // }
//   });
// };

// const cardMatch = () => {
//   card.forEach((e) => {
//     if (e.classList.contains("card-front") && openCards.length <= 2) {
//       openCards.push(e);
//     }
//   });
// };

randomizeCards(cards);
console.dir(cards);
console.log(openCards);
