import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ cartCount }) => (
  <header>
    <h1>Paradise Nursery</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Shop</Link>
      <Link to="/cart">
        <FaShoppingCart /> {cartCount}
      </Link>
    </nav>
  </header>
);

export default Header;