import React from 'react';

export default function Card({ id, label, handleClick }) {
  return (
    <div
      id={id}
      className="outline-dashed outline-2 outline-offset-2"
      onClick={(e) => handleClick(e.target.id)}
    >
      {label}
    </div>
  );
}
