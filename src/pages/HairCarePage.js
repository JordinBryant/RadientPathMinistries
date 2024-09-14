import React from "react";
import "./HairCarePage.css";

const HairPage = () => {
  return (
    <div className="hair-care-page">
      {/* Header */}
      <header className="header">
        <h1>Radiant Hair Care</h1>
        <nav className="nav">
          <ul>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#tips">Hair Tips</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Let Your Hair Shine</h2>
          <h5>
            1 Corinthians 11:15 But if a woman has long hair, it is a glory to
            her; for her hair is given to her for a covering.
          </h5>
          <h5>
            Matthew 10:30 And even the very hairs of your head are all numbered.
          </h5>
          <p>Discover organic products and tips for radiant, healthy hair.</p>
          <button className="cta-btn">Shop Now</button>
        </div>
      </section>

      {/* Products Section */}
      <section className="products" id="products">
        <h2>Our Hair Care Products</h2>
        <div className="product-list">
          <div className="product">
            <img src="/images/product1.jpg" alt="Hair Oil" />
            <h3>Organic Hair Oil</h3>
            <p>For silky smooth hair</p>
          </div>
          <div className="product">
            <img src="/images/product2.jpg" alt="Shampoo" />
            <h3>Herbal Shampoo</h3>
            <p>Clean and nourish your scalp</p>
          </div>
          <div className="product">
            <img src="/images/product3.jpg" alt="Conditioner" />
            <h3>Conditioner</h3>
            <p>Hydrate and protect</p>
          </div>
        </div>
      </section>

      {/* Tips/Blog Section */}
      <section className="tips" id="tips">
        <h2>Hair Care Tips</h2>
        <div className="tips-list">
          <div className="tip">
            <h4>Tip #1: Use Natural Oils</h4>
            <p>
              Using natural oils like coconut oil can help nourish your scalp
              and hair.
            </p>
          </div>
          <div className="tip">
            <h4>Tip #2: Wash Less Frequently</h4>
            <p>
              Over-washing can strip your hair of natural oils. Try washing 2-3
              times a week.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <p>© 2024 Radiant Hair Care. All rights reserved.</p>
        <p>
          {/* Follow us on <a href="#">Instagram</a> | <a href="#">Facebook</a> */}
        </p>
      </footer>
    </div>
  );
};

export default HairPage;
