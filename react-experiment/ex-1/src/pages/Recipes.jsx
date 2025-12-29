import React, { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(data => setRecipes(data.recipes));
  }, []);

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Recipe Book</h1>
      <div className="grid-container">
        {recipes.map(item => (
          <ItemCard 
            key={item.id}
            image={item.image}
            title={item.name}
            subtitle={`Difficulty: ${item.difficulty}`}
            extraInfo={`${item.caloriesPerServing} kcal`}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipes;