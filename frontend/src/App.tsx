import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Categories from "./Categories";
import Questions from "./Questions";

function Home() {
  return <h1>TCF</h1>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/questions/2">Questions</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/questions/:id" component={Questions} />
      </div>
    </Router>
  );
}

export default App;
