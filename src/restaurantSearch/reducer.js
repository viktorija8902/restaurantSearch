const initialState = {
  restaurants: [],
  error: false, //TODO add different errors
};

const restaurantSearch = (state = initialState, action) => {
  switch (action.type) {
    case "RESTAURANTS_RETURNED":
      return { ...state, restaurants: action.restaurants };
    default:
      return state;
  }
};

export default restaurantSearch;
