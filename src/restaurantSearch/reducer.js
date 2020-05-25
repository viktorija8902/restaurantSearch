import { filterListByValue } from "./utils";

const initialState = {
  restaurants: [],
  filteredRestaurants: [],
  error: false,
  message: "",
  loading: false,
};

const restaurantSearch = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: action.loading };

    case "RESTAURANTS_RETURNED":
      const { restaurants, message } = action;
      return {
        ...state,
        restaurants,
        filteredRestaurants: restaurants,
        message,
        error: false,
      };

    case "FILTER_RESTAURANTS":
      let filteredRestaurants;
      if (action.text === "") {
        filteredRestaurants = state.restaurants;
      } else {
        filteredRestaurants = filterListByValue(state.restaurants, action.text);
      }
      return { ...state, filteredRestaurants };
    default:
      return state;
  }
};

export default restaurantSearch;
