export function searchForRestaurants(params) {
  return {
    type: "GET_RESTAURANTS", //TODO add to constants
    params,
  };
}

export function filterRestaurants(text) {
  return {
    type: "FILTER_RESTAURANTS", //TODO add to constants
    text,
  };
}
