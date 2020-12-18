import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import Questions from "./Questions";
import "bulma";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              TCF
            </Link>
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/categories">
                Categories
              </Link>
              <Link className="navbar-item" to="/questions/2">
                Questions
              </Link>
            </div>
          </div>
        </nav>
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/questions/:id" component={Questions} />
        </div>
      </div>
    </Router>
  );
}

export default App;
