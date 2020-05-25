import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ListItem from "./ListItem";
import Loading from "./Loading";
import SearchBox from "./SearchBox";
import Filters from "./Filters";
import "./restaurantSearch.css";

const RestaurantSearchPage = ({
  loading,
  restaurants,
  filteredRestaurants,
  message,
}) => {
  const mainHeader = <h1>Find the best restaurants in your area!</h1>;
  const subHeader = <h2>Search by city</h2>;
  const restaurantsList = filteredRestaurants.map((item) => (
    <ListItem key={item.id} {...item} />
  ));
  if (loading) {
    return (
      <Fragment>
        {mainHeader}
        {subHeader}
        <SearchBox />
        <Loading />
      </Fragment>
    );
  }
  const showResultsHeader = !!restaurants.length || message;
  return (
    <Fragment>
      {mainHeader}
      {subHeader}
      <SearchBox />
      {!!restaurants.length && <Filters />}
      {showResultsHeader && <h2>Restaurants found:</h2>}
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
