import React from 'react';
import Card from './Card';

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

  const cardEls = cards.map((card) => <Card key={card.id} label={card.label} />);

  return (
    <main className="container max-w-4xl mx-auto mb-6 px-4">
      <div className="grid gap-4 grid-cols-6">{cardEls}</div>
    </main>
  );
}
