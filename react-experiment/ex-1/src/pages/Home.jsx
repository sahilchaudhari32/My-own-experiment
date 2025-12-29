import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const categories = [
    { title: "Food", path: "/food", desc: "Explore various cuisines" },
    { title: "Products", path: "/products", desc: "Browse the fake store" },
    { title: "Movies", path: "/movies", desc: "Latest TV shows and ratings" },
    { title: "Recipes", path: "/recipes", desc: "Cook something new today" }
  ];

  return (
    <div className="container">
      <header className="home-header">
        <h1>Multi-API Explorer</h1>
        <p>A simple React application featuring routing and data fetching.</p>
      </header>

      <div className="grid-container">
        {categories.map((item, index) => (
          <Link to={item.path} key={index} className="home-card-link">
            <div className="home-info-card">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <span>Explore 🡢</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;