import React from 'react';

const OrderSummary = ({ items, total }) => {
  // Format the total price to two decimal places
  const formattedTotal = total.toFixed(2);

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
      <h4>Total: ${formattedTotal}</h4>
    </div>
  );
};

export default OrderSummary;
