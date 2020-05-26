import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { filterRestaurants } from "../actions";
import ThemedInput from "../../common/ThemedInput";

const Filters = ({ onListFilter }) => {
  const [filterValue, setFilterValue] = useState("");

  function handleChange(e) {
    setFilterValue(e.target.value);
    onListFilter(e.target.value);
  }

  return (
    <ThemedInput
      id="restaurantFilter"
      value={filterValue}
      label="Enter text to filter the results:"
      onChange={handleChange}
    />
  );
};

Filters.propTypes = {
  onListFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    onListFilter: (text) => {
      dispatch(filterRestaurants(text));
    },
  };
};

export default connect(null, mapDispatchToProps)(Filters);
