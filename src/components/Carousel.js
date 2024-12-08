import React from 'react';

const Carousel = () => {
  return (
    <div className="carousel">
      <h2>Featured Items</h2>
      {/* Static carousel, replace images as needed */}
      <div className="carousel-images">
        <img src="https://t3.ftcdn.net/jpg/05/60/70/82/240_F_560708240_pMZPOuSfvblWGRoaiZFLT4wiFTzQPwQe.jpg" alt="Pizza" />
        <img src="https://via.placeholder.com/600x400?text=Featured+2" alt="Featured 2" />
        <img src="https://via.placeholder.com/600x400?text=Featured+3" alt="Featured 3" />
      </div>
    </div>
  );
};

export default Carousel;
