import React from 'react';

const ItemCard = ({ image, title, subtitle, extraInfo }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        {extraInfo && <span className="card-tag">{extraInfo}</span>}
      </div>
    </div>
  );
};

export default ItemCard;