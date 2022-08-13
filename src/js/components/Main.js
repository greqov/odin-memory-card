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

export default function Main() {
  const cards = [
    {
      id: 0,
      label: '0',
    },
    {
      id: 1,
      label: '1',
    },
    {
      id: 2,
      label: '2',
    },
    {
      id: 3,
      label: '3',
    },
    {
      id: 4,
      label: '4',
    },
    {
      id: 5,
      label: '5',
    },
    {
      id: 6,
      label: '6',
    },
    {
      id: 7,
      label: '7',
    },
    {
      id: 8,
      label: '8',
    },
    {
      id: 9,
      label: '9',
    },
    {
      id: 10,
      label: '10',
    },
    {
      id: 11,
      label: '11',
    },
  ];

  const [clickedCards, setClickedCards] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (clickedCards.length > bestScore) {
      setBestScore(clickedCards.length);
    }
  }, [clickedCards]);

  useEffect(() => {
    // TODO: remove this useEffect
    console.log(clickedCards);
  }, [clickedCards]);

  const handleClick = (id) => {
    console.log('Such increase!', id);
    setClickedCards((prev) => {
      if (!prev.includes(id)) {
        return [...prev, id];
      }
      return [];
    });
  };

  const cardEls = shuffle(cards).map((card) => (
    <Card key={card.id} id={card.id} label={card.label} handleClick={handleClick} />
  ));

  // TODO: add reset button

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
