import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import FoodList from "./components/FoodList";
import NutritionList from "./components/NutritionList";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          edamam
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/nutriton"} className="nav-link">
              Nutrition Details
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/food"} className="nav-link">
              Food Database
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/nutriton"]} component={FoodList} />
          <Route exact path="/food" component={NutritionList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
