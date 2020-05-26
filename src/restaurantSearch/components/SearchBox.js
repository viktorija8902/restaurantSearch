import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { searchForRestaurants } from "../actions";
import { ThemeContext } from "../../App";
import ThemedInput from "../../common/ThemedInput";

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
      <ThemedInput
        id="city"
        value={city}
        label="City:"
        onChange={handleCityChange}
      />
      <ThemeContext.Consumer>
        {(theme) => {
          return (
            <input
              className={`search-box__submit--${theme}`}
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
