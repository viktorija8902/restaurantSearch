import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ListItem from "./ListItem";
import Loading from "./Loading";
import SearchBox from "./SearchBox";
import Filters from "./Filters";

const RestaurantSearchPage = ({
  loading,
  restaurants,
  filteredRestaurants,
  message,
}) => {
  const restaurantsList = filteredRestaurants.map((item) => (
    <ListItem key={item.id} {...item} />
  ));
  if (loading) {
    return (
      <Fragment>
        <SearchBox />
        <Loading />
      </Fragment>
    );
  }
  return (
    <Fragment>
      <SearchBox />
      {!!restaurants.length && <Filters />}
      <p>{message}</p>
      <div>{restaurantsList}</div>
    </Fragment>
  );
};

RestaurantSearchPage.propTypes = {
  restaurants: PropTypes.array.isRequired,
  filteredRestaurants: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const search = state.restaurantSearch;
  return {
    restaurants: search.restaurants,
    filteredRestaurants: search.filteredRestaurants,
    loading: search.loading,
    message: search.message,
  };
};

export default connect(mapStateToProps)(RestaurantSearchPage);
