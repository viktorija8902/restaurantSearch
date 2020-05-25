import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { searchForRestaurants } from "../actions";
import { ThemeContext } from "../../App";

const SearchBox = ({ onSearchClick }) => {
  const [city, setCity] = useState("");

  function handleCityChange(e) {
    const city = e.target.value;
    setCity(city);
  }

  function handleSubmit(e) {
    onSearchClick({ city });
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="city" className="search-box__label">
        City:
        <input
          id="city"
          className="search-box__input"
          type="text"
          value={city}
          onChange={handleCityChange}
        />
      </label>
      <ThemeContext.Consumer>
        {(theme) => {
          return (
            <input
              style={{ backgroundColor: theme }}
              className="search-box__submit"
              type="submit"
              value="Search"
              disabled={!city}
            />
          );
        }}
      </ThemeContext.Consumer>
    </form>
  );
};

SearchBox.propTypes = {
  onSearchClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchClick: (params) => {
      dispatch(searchForRestaurants(params));
    },
  };
};

export default connect(null, mapDispatchToProps)(SearchBox);
