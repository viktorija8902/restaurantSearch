import React from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "../App";

const ThemedInput = ({ onChange, value, id, label }) => (
  <ThemeContext.Consumer>
    {(theme) => {
      return (
        <label htmlFor={id}>
          {label}
          <input
            id={id}
            className={`app__input--${theme}`}
            type="text"
            value={value}
            onChange={onChange}
          />
        </label>
      );
    }}
  </ThemeContext.Consumer>
);

ThemedInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ThemedInput;
