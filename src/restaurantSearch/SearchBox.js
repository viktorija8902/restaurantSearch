import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { searchForRestaurants } from "./actions";

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
      <label>
        City:
        <input type="text" value={city} onChange={handleCityChange} />
      </label>
      <input type="submit" value="Search" />
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
