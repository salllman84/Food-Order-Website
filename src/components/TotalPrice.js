import React from 'react';

const TotalPrice = ({ total }) => {
  // Format the total price to two decimal places
  const formattedTotal = total.toFixed(2);

  return (
    <div className="total-price">
      <h3>Total Price: <span className="total-amount">${formattedTotal}</span></h3>
    </div>
  );
};

export default TotalPrice;
