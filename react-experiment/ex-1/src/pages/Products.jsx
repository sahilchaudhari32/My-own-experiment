import React, { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Products</h1>
      
      <div className="grid-container">
        {products.map(item => (
          <ItemCard 
            key={item.id}
            image={item.image}
            title={item.title}
            subtitle={`$${item.price}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;