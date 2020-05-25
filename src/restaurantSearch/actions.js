export function searchForRestaurants(params) {
  return {
    type: "GET_RESTAURANTS", //TODO add to constants
    params,
  };
}
