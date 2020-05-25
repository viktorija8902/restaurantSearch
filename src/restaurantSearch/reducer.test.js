import restaurantSearch from "./reducer";

describe("reducer: LOADING action", () => {
  it("LOADING action changes the state correctly", () => {
    const initialState = {
      loading: true,
      restaurants: [],
    };
    const action = { type: "LOADING", loading: false };
    expect(restaurantSearch(initialState, action)).toEqual({
      loading: false,
      restaurants: [],
    });
  });
});
