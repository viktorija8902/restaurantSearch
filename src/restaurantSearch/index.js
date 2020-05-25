import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { searchForRestaurants } from "./actions";
import ListItem from "./ListItem";
import Loading from "./Loading";

const RestaurantSearchPage = ({ loading, restaurants, onSearchClick }) => {
  const restaurantsList = restaurants.map((item) => (
    <ListItem key={item.id} {...item} />
  ));
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <button onClick={onSearchClick}>Search</button>
      <div>{restaurantsList}</div>
    </div>
  );
};

RestaurantSearchPage.propTypes = {
  restaurants: PropTypes.array.isRequired,
  onSearchClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurantSearch.restaurants,
    loading: state.restaurantSearch.loading,
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
