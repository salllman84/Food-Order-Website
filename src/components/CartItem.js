import React from 'react';

const CartItem = ({ name, price, quantity, removeItem }) => {
  // Format the price to always show two decimal places
  const formattedPrice = price.toFixed(2);

  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <h4>{name}</h4>
        <span className="price">${formattedPrice}</span>
        <span className="quantity">Qty: {quantity}</span>
      </div>
      <button className="remove-item" onClick={removeItem}>Remove</button>
    </div>
  );
};

export default CartItem;
