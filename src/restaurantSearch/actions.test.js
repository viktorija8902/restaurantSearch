import { searchForRestaurants } from "./actions";

describe("searchForRestaurants action", () => {
  it("searchForRestaurants returns correct action", () => {
    const params = { city: "Toronto" };
    expect(searchForRestaurants(params)).toEqual({
      type: "GET_RESTAURANTS",
      params,
    });
  });
});
