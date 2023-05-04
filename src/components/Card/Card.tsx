import React from 'react';
import { ICard } from './Card.props';
import './Card.css';

interface Card {
  product: ICard;
}

const Card = ({ product }: Card) => {
  return (
    <div className="post" data-testid="post">
      <img src={product.imageUrl} alt={product.title} height="200" />
      <h2>{product.title}</h2>
      <p>{product.date}</p>
      <div className="post-brand">
        brand: <span>{product.brand}</span>{' '}
      </div>
      <div className="post-category">
        category: <span>{product.category}</span>{' '}
      </div>
    </div>
  );
};

export default Card;
