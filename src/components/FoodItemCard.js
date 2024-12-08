import React from 'react'; 

const FoodItemCard = ({ name, image, description, price }) => {
  const placeholderImage = "https://via.placeholder.com/300"; // A placeholder image URL if no image is provided

  return (
    <div className="food-item-card">
      <img 
        src={image || placeholderImage} 
        alt={name} 
        className="food-item-image" 
      />
      <div className="food-item-details">
        <h4>{name}</h4>
        <p>{description}</p>
        <span className="price">${price}</span>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default FoodItemCard;
