import React from "react";
import "./App.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import List from "./pages/blog/List";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/blogs">
            <List />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
