import React from 'react';

export default function Card({ card, handleClick }) {
  const { id, label, image } = card;

  return (
    <div
      id={id}
      className="js-card p-1 outline-dashed outline-2 outline-offset-2 text-center italic cursor-pointer hover:bg-orange-100 transition"
      onClick={(e) => handleClick(e.target.closest('.js-card').id)}
    >
      <img src={image} alt={label} />
      <span>{label}</span>
    </div>
  );
}
