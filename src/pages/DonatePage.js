import React from "react";
import "./DonatePage.css";

const DonatePage = () => {
  return (
    <div className="donate-page">
      <h2>Support Our Mission</h2>
      <p>
        Your generosity helps us continue our work. Every contribution counts!!

        <label htmlFor="payment-method">Payment Method:</label>
        <select id="payment-method" name="payment-method" required>
          <option value="">Select Payment Method</option>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>

        <button type="submit" className="donate-btn">
          Donate Now
        </button>
      </form>
    </div>
  );
};

export default DonatePage;
