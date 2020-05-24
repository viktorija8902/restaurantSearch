import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./App.css";
import RestaurantSearchPage from "./restaurantSearch/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <RestaurantSearchPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
