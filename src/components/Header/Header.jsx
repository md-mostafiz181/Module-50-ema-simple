import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <h2>Ema-Jhon</h2>

      <div>
        <a href="/home">Home</a>
        <a href="/order">Order</a>
        <a href="/about">About</a>
        <a href="/invertory">Inventory</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Header;
