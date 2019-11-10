import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <Router>
        <Router>
          <div className="flex-bar">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </Router>
    </header>
  </div>
);

export default App;
