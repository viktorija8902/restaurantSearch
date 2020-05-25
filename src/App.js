import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import RestaurantSearchPage from "./restaurantSearch/index";
import Settings from "./settings/index";

const ThemeContext = React.createContext("white");

function App() {
  const [theme, setTheme] = useState("");
  function handleThemeChange(theme) {
    setTheme(theme);
  }
  return (
    <ThemeContext.Provider value={theme}>
      <div className="page" style={{ backgroundColor: theme }}>
        <Router>
          <Switch>
            <Route path="/">
              <Settings onThemeSelect={handleThemeChange} />
              <RestaurantSearchPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
