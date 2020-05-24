import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { searchForRestaurants } from "./actions";
// import ListItem from "./ListItem";

const RestaurantSearchPage = ({ restaurants, onSearchClick }) => {
  const restaurantsList = restaurants.map((restaurant, index) => (
    // <ListItem key={restaurant.id} {...restaurant} />
    <div key={index}>Test </div>
  ));
  return (
    <div>
      <button onClick={onSearchClick}>Search</button>
      <div>{restaurantsList}</div>
    </div>
  );
};

RestaurantSearchPage.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onSearchClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurantSearch.restaurants,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchClick: (params) => {
      dispatch(searchForRestaurants(params));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantSearchPage);
