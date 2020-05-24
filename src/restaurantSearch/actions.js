export function searchForRestaurants(params) {
  return {
    type: "SEARCH_FOR_RESTAURANTS", //TODO add to constants
    params,
  };
}
