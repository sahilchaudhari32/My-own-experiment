import React, { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard';

const Food = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then(res => res.json())
      .then(data => setMeals(data.meals));
  }, []);

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Food Menu</h1>
      
      <div className="grid-container">
        {meals.map(item => (
          <ItemCard 
            key={item.idMeal}
            image={item.strMealThumb}
            title={item.strMeal}
            subtitle="Delicious Seafood"
          />
        ))}
      </div>
    </div>
  );
};

export default Food;