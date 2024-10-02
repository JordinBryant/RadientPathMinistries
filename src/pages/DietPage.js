// pages/DietPage.js
import React from "react";
import "./DietPage.css";

const DietPage = () => {
  return (
    <div className="diet-page">
      {/* Header */}
      <header className="diet-header">
        <h1>Biblical Diet & Healthy Living</h1>
        <p>
          Explore the spiritual and physical benefits of maintaining a wholesome
          diet as guided by biblical principles.
        </p>
      </header>

      {/* Overview Section */}
      <section className="diet-overview">
        <h2>Introduction to Biblical Diet</h2>
        <p>
          In scripture, we are often reminded of the importance of treating our
          bodies as temples. A biblical diet encourages us to focus on natural,
          wholesome foods that nourish our bodies and souls. Explore key
          principles from the Bible that highlight how we should approach food
          and health.
        </p>
      </section>

      {/* Scripture Section */}
      <section className="diet-scriptures">
        <h2>Scriptural Foundations</h2>
        <div className="scripture">
          <blockquote>
            <p>
              "So whether you eat or drink or whatever you do, do it all for the
              glory of God." — 1 Corinthians 10:31
            </p>
          </blockquote>
          <blockquote>
            <p>
              "Then God said, 'I give you every seed-bearing plant on the face
              of the whole earth and every tree that has fruit with seed in it.
              They will be yours for food.'" — Genesis 1:29
            </p>
          </blockquote>
          <blockquote>
            <p>
              "Do not join those who drink too much wine or gorge themselves on
              meat, for drunkards and gluttons become poor, and drowsiness
              clothes them in rags." — Proverbs 23:20-21
            </p>
          </blockquote>
        </div>
      </section>

      {/* Diet Tips Section */}
      <section className="diet-tips">
        <h2>Healthy Living Tips</h2>
        <ul>
          <li>
            Eat more plant-based foods like fruits, vegetables, and grains.
          </li>
          <li>Avoid overeating and focus on moderation.</li>
          <li>Stay hydrated with plenty of water.</li>
          <li>
            Incorporate fasting into your lifestyle for spiritual and physical
            health.
          </li>
        </ul>
      </section>

      {/* Recipes Section */}
      <section className="diet-recipes">
        <h2>Healthy Recipes</h2>
        <div className="recipe-list">
          <div className="recipe">
            <h3>Quinoa Salad</h3>
            <p>
              A refreshing salad made with quinoa, vegetables, and a lemon
              dressing.
            </p>
          </div>
          <div className="recipe">
            <h3>Grilled Vegetable Medley</h3>
            <p>Seasonal vegetables grilled to perfection, served with herbs.</p>
          </div>
          <div className="recipe">
            <h3>Fruit Smoothie</h3>
            <p>A delicious blend of fruits, yogurt, and a splash of honey.</p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="diet-gallery">
        <h2>Photo Gallery</h2>
        <div className="gallery">
          <img src="/images/honey.jpg" alt="Healthy Meal 1" />
          <img src="/images/veges2.jpg" alt="Healthy Meal 2" />
          <img src="/images/chiaseeds.jpg" alt="Healthy Meal 3" />
          <img src="/images/meat.jpg" alt="Healthy Meal 4" />
        </div>
      </section>
    </div>
  );
};

export default DietPage;
