const initialState = {
  restaurants: [],
  error: false,
  loading: false,
};

const restaurantSearch = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: action.loading };
    case "RESTAURANTS_RETURNED":
      return { ...state, restaurants: action.restaurants };
    default:
      return state;
  }
};

export default restaurantSearch;
