"use strict";
let cardContainer = document.querySelector(".card-container");

let cards = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
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
  return cards;
};
// to check it works:
randomizeCards(cards);
console.log(cards);

const createCards = () => {
  cards.forEach((card, index) => {
    card = document.createElement("div");
    if (cards[index] === 0) {
      card.classList.add(`card`, `pair1`);
      card.setAttribute("id", "album1");
    }
    if (cards[index] === 1) {
      card.classList.add(`card`, `pair1`);
      card.setAttribute("id", "song1");
    }
    if (cards[index] === 2) {
      card.classList.add(`card`, `pair2`);
      card.setAttribute("id", "album2");
    }
    if (cards[index] === 3) {
      card.classList.add(`card`, `pair2`);
      card.setAttribute("id", "song2");
    }
    if (cards[index] === 4) {
      card.classList.add(`card`, `pair3`);
      card.setAttribute("id", "album3");
    }
    if (cards[index] === 5) {
      card.classList.add(`card`, `pair3`);
      card.setAttribute("id", "song3");
    }
    if (cards[index] === 6) {
      card.classList.add(`card`, `pair4`);
      card.setAttribute("id", "album4");
    }
    if (cards[index] === 7) {
      card.classList.add(`card`, `pair4`);
      card.setAttribute("id", "song4");
    }
    if (cards[index] === 8) {
      card.classList.add(`card`, `pair5`);
      card.setAttribute("id", "album5");
    }
    if (cards[index] === 9) {
      card.classList.add(`card`, `pair5`);
      card.setAttribute("id", "song5");
    }
    if (cards[index] === 10) {
      card.classList.add(`card`, `pair6`);
      card.setAttribute("id", "album6");
    }
    if (cards[index] === 11) {
      card.classList.add(`card`, `pair6`);
      card.setAttribute("id", "song6");
    }
    cardContainer.append(card);
  });
};
createCards(cards);
