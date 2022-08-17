import React from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";


export default function NavBar() {
  return (
    // <Router>
      <div className="navbar">
        <div className="container">
          <span className="logo">DreamTeamArt</span>
          <span>
          <nav>
          <ul className="primary-nav">
            <li>
              <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
            </li>
            <li>
              <Link to="/About" style={{ textDecoration: 'none' }}>About</Link>
            </li>
            <li>
              <Link to="/Blog" style={{ textDecoration: 'none' }}>Blog</Link>
            </li>
            <li>
              <Link to="/Login" style={{textDecoration: 'none'}}>Login</Link>
            </li>
          </ul>
          </nav>
          </span>
        </div>
      </div>
  )
};
