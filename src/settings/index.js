import React, { Fragment } from "react";
import PropTypes from "prop-types";

const themeMap = {
  light: {
    backgroundColor: "white",
  },
  dark: {
    backgroundColor: "tan",
  },
};

const Settings = ({ onThemeSelect }) => {
  function handleClick(e) {
    onThemeSelect(themeMap[e.target.value].backgroundColor);
  }

  const colors = ["light", "dark"];
  return (
    <Fragment>
      {colors.map((color) => (
        <button key={color} onClick={handleClick} value={color}>
          {color} theme
        </button>
      ))}
    </Fragment>
  );
};

Settings.propTypes = {
  onThemeSelect: PropTypes.func.isRequired,
};

export default Settings;
