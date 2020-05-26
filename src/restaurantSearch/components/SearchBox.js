import React, { Fragment, useState } from "react";
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
      <ThemeContext.Consumer>
        {(theme) => {
          return (
            <Fragment>
              <label htmlFor="city" className="search-box__label">
                City:
                <input
                  id="city"
                  className={`search-box__input--${theme}`}
                  type="text"
                  value={city}
                  onChange={handleCityChange}
                />
              </label>
              <input
                className={`search-box__submit--${theme}`}
                type="submit"
                value="Search"
                disabled={!city}
              />
            </Fragment>
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
