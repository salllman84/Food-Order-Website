// src/components/CategoryFilter.js
import React from 'react';

const CategoryFilter = ({ setSelectedCategory }) => {
  return (
    <div className="category-filter">
      <button onClick={() => setSelectedCategory('All')}>All</button>
      <button onClick={() => setSelectedCategory('Main')}>Main</button>
      <button onClick={() => setSelectedCategory('Side')}>Side</button>
      <button onClick={() => setSelectedCategory('Dessert')}>Dessert</button>
    </div>
  );
};

export default CategoryFilter;
