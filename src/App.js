import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import RestaurantSearchPage from "./restaurantSearch/index";
import Settings from "./settings/index";

export const ThemeContext = React.createContext("white");

function App() {
  const [theme, setTheme] = useState("");

  function handleThemeChange(theme) {
    setTheme(theme);
  }
  //TODO move this to store or to context
  const isDesktop = window.innerWidth >= 500;
  return (
    <ThemeContext.Provider value={theme}>
      <div className="page" style={{ backgroundColor: theme }}>
        <Router>
          <Switch>
            <Route path="/">
              <Settings onThemeSelect={handleThemeChange} />
              <RestaurantSearchPage isDesktop={isDesktop} />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
