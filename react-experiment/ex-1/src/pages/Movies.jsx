import React, { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(res => res.json())
      .then(data => setMovies(data.slice(0, 20))); 
  }, []);

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Popular Shows</h1>
      <div className="grid-container">
        {movies.map(item => (
          <ItemCard 
            key={item.id}
            image={item.image?.medium} 
            title={item.name}
            subtitle={`Rating: ${item.rating?.average || 'N/A'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;