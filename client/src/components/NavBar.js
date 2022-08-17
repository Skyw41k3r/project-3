import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Routes
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
          </ul>

          </nav>
          </span>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes> */}
      </div>
  )
  {/* </Router> */}
  // );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }