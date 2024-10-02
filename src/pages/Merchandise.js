import React from "react";
import "./MerchandisePage.css";

const Merchandise = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$10",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$15",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$20",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Product 4",
      price: "$25",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="merchandise-page">
      <h1>Shop Merchandise</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Merchandise;
