import React from "react";
import "../css/App.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className= "navbar">
      <Link to="/" className="left">
        <span className="link">
         Riya Agrawal
        </span>
      </Link>
      <div className="right">
      <Link to="/about" className="link">
          About
        </Link>
        <Link to="/Project" className="link">
          <span>Projects</span>
        </Link>
        <Link to="/blog" className="link">
          Blog
        </Link>
    </div>
    </div>
  );
};
export default Header;