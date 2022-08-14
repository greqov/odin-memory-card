import React, { useState, useEffect } from 'react';
import Card from './Card';

function shuffle(arr) {
  const array = arr;
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

function getImgLabel(str) {
  return str.slice(2, -4).replace('-', ' ');
}

const requireContext = require.context('../../img', true, /^\.\/.*\.png$/);
const cards = requireContext.keys().map((item, index) => ({
  id: index,
  label: getImgLabel(item),
  image: requireContext(item),
}));

export default function Main() {
  const [clickedCards, setClickedCards] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (clickedCards.length > bestScore) {
      setBestScore(clickedCards.length);
    }
  }, [clickedCards]);

  const handleClick = (id) => {
    setClickedCards((prev) => {
      if (!prev.includes(id)) {
        return [...prev, id];
      }
      return [];
    });
  };

  const cardEls = shuffle(cards).map((card) => (
    <Card key={card.id} card={card} handleClick={handleClick} />
  ));

  return (
    <main className="container max-w-4xl mx-auto mb-6 px-4">
      <div className="mb-4">
        <div>
          <span>Game score: </span>
          <span>{clickedCards.length}</span>
        </div>

        <div>
          <span>Best score: </span>
          <span>{bestScore}</span>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-6">{cardEls}</div>
    </main>
  );
}
