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
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Let Your Hair Shine</h2>

          <div className="scripture-block">
            <blockquote className="scripture">
              <h5>
                1 Corinthians 11:15 - But if a woman has long hair, it is a
                glory to her; for her hair is given to her for a covering.
              </h5>
              <h5>
                Luke 12:7 - Indeed, the very hairs of your head are all
                numbered. Don’t be afraid; you are worth more than many
                sparrows.
              </h5>
              <h5>
                Proverbs 16:31 - Gray hair is a crown of splendor; it is
                attained in the way of righteousness.
              </h5>
              <h5>
                Matthew 10:30 - And even the very hairs of your head are all
                numbered.
              </h5>
            </blockquote>
          </div>

          <div className="hero-message">
            <h4>
              As reflected in the scriptures above, and in many others
              throughout the Bible, hair holds significant spiritual meaning. It
              is a symbol of beauty, identity, and divine connection. This is
              why it's essential to give it the utmost care and attention,
              recognizing its deeper value beyond just appearance.
            </h4>
          </div>

          <p className="hero-description">
            Discover organic products and tips for radiant, healthy hair.
          </p>
          <button className="cta-btn">Shop Now</button>
        </div>
      </section>

      {/* Products Section */}
      <section className="products" id="products">
        <h2>Our Hair Care Products</h2>
        <div className="product-list">
          <div className="product">
            <img src="/images/hairOil.jpg" alt="Hair Oil" />
            <h3>Organic Hair Oil</h3>
            <p>For silky smooth hair</p>
          </div>
          <div className="product">
            <img src="/images/shampoo.jpg" alt="Shampoo" />
            <h3>Herbal Shampoo</h3>
            <p>Clean and nourish your scalp</p>
          </div>
          <div className="product">
            <img src="/images/conditioner.jpg" alt="Conditioner" />
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
              times a month.
            </p>
          </div>
          <div className="tip">
            <h4>Tip #3: Finish Hair washing with cold water</h4>
            <p>
              Cold water can generally stimulate the production of white blood
              cells throughout the body, which are crucial for fighting
              infections, potentially boosting your overall immune system;
              therefore, indirectly supporting the immune response in your head
              as well.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HairPage;
