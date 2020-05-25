import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { filterRestaurants } from "./actions";

const Filters = ({ onListFilter }) => {
  const [filterValue, setFilterValue] = useState("");

  function handleChange(e) {
    setFilterValue(e.target.value);
    onListFilter(e.target.value);
  }

  return (
    <label>
      Enter text to filter the results:
      <input type="text" value={filterValue} onChange={handleChange} />
    </label>
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
