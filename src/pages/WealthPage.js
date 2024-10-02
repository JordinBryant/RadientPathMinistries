import React from "react";
import "./WealthPage.css";

const WealthPage = () => {
  return (
    <div className="wealth-page">
      <header className="wealth-header">
        <h1>Biblical Wealth</h1>
        <p>
          Unlock the keys to prosperity through God’s principles of wealth and
          stewardship.
        </p>
      </header>

      <div className="wealth-content">
        <section className="wealth-section">
          <h2>God's Purpose for Wealth</h2>
          <p>
            Discover how God’s plan for wealth is about abundance, stewardship,
            and purpose.
          </p>
        </section>

        <section className="wealth-section">
          <h2>Stewardship and Generosity</h2>
          <p>
            True wealth comes from managing resources wisely and being generous
            to others in need.
          </p>
        </section>

        <section className="wealth-section">
          <h2>Steps to Financial Freedom</h2>
          <ul>
            <li>Practice financial discipline and avoid unnecessary debt.</li>
            <li>Invest wisely with long-term goals in mind.</li>
            <li>Embrace giving as a key to unlocking abundance.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default WealthPage;
