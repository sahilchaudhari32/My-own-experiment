import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Home from '../pages/Home';
import Food from '../pages/Food';
import Products from '../pages/Products';
import Movies from '../pages/Movies';
import Recipes from '../pages/Recipes';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">Cultivators Mall</div>
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/food">Food</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/movies">Movies</NavLink></li>
        <li><NavLink to="/recipes">Recipes</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;