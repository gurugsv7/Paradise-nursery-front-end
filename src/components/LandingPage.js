import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="landing">
    <h1>Welcome to Paradise Nursery</h1>
    <p>Your one-stop shop for beautiful houseplants.</p>
    <Link to="/products" className="button">
      Get Started
    </Link>
  </div>
);

export default LandingPage;