import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import "./settings.css";

const themeMap = {
  light: {
    backgroundColor: "white",
  },
  dark: {
    backgroundColor: "tan",
  },
};

const Settings = ({ onThemeSelect }) => {
  const [selectedTheme, selectTheme] = useState("light");
  function handleClick(e) {
    const theme = e.target.value;
    onThemeSelect(themeMap[theme].backgroundColor);
    selectTheme(theme);
  }

  const colors = ["light", "dark"];
  return (
    <Fragment>
      {colors.map((color) => {
        const isSelected = selectedTheme === color;
        return (
          <button
            className={`settings__button ${
              isSelected && "settings__button--selected"
            }`}
            aria-pressed={isSelected}
            tabIndex="0"
            key={color}
            onClick={handleClick}
            value={color}
          >
            {color} theme
          </button>
        );
      })}
    </Fragment>
  );
};

Settings.propTypes = {
  onThemeSelect: PropTypes.func.isRequired,
};

export default Settings;
