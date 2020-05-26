import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import "./settings.css";

const Settings = ({ onThemeSelect }) => {
  const [selectedTheme, selectTheme] = useState("light");
  function handleClick(e) {
    const theme = e.target.value;
    onThemeSelect(theme);
    selectTheme(theme);
  }

  const themes = ["light", "dark"];
  return (
    <Fragment>
      {themes.map((color) => {
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
