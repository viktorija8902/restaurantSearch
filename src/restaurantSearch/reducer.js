const initialState = {
  restaurants: [],
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
      return { ...state, restaurants, message, error: false };
    default:
      return state;
  }
};

export default restaurantSearch;
