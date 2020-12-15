import React from "react";
import "../css/App.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
const Header = () => {
  return (
    <Router>
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
    </Router>
  );
};
export default Header;