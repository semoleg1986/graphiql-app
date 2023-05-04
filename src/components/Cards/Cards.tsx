import React from 'react';
import dataCard from '../../assets/json/cards.json';
import Card from '../Card/Card';
import './Cards.css';

const Cards = () => {
  return (
    <div className="post-container">
      {dataCard.products.map((i) => (
        <Card key={i.id} product={i} />
      ))}
    </div>
  );
};

export default Cards;
