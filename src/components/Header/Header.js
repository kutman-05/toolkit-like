import React from "react";
import { Link } from "react-router-dom";
import "./header.css"
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <h1>Shop</h1>
          <div className="nav">
            <Link to={"/"}>Home</Link>
            <Link to={"/Favorite"}>Favorite</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
