import { call } from "redux-saga/effects";
import { getRestaurants } from "./restaurantsApi";
import { addSearchData } from "./utils";

import { fetchRestaurants } from "./sagas";

describe("fetchRestaurants saga", () => {
  it("dispatches correct actions when few restaurants are returned", () => {
    const params = { city: "Toronto" };
    const gen = fetchRestaurants({ params });

    const startLoadingGen = gen.next();
    expect(startLoadingGen.value.type).toEqual("PUT");
    expect(startLoadingGen.value.payload.action).toEqual({
      type: "LOADING",
      loading: true,
    });

    expect(gen.next().value).toEqual(call(getRestaurants, "Toronto"));

    const response = { restaurants: [{ fakeRestaurant: 1 }] };
    expect(gen.next(response).value).toEqual(
      call(addSearchData, [{ fakeRestaurant: 1 }])
    );

    const restaurantsWithSearchData = [{ fakeRestaurant: 1, searchData: "1" }];
    const returnedGen = gen.next(restaurantsWithSearchData);
    expect(returnedGen.value.type).toEqual("PUT");
    expect(returnedGen.value.payload.action).toEqual({
      type: "RESTAURANTS_RETURNED",
      restaurants: restaurantsWithSearchData,
      message: "",
    });

    const finishLoadingGen = gen.next();
    expect(finishLoadingGen.value.type).toEqual("PUT");
    expect(finishLoadingGen.value.payload.action).toEqual({
      type: "LOADING",
      loading: false,
    });
  });

  //TODO:
  // it("dispatches correct actions when no restaurants are returned")

  it("dispatches correct actions when there is an error", () => {
    const params = { city: "Toronto" };
    const gen = fetchRestaurants({ params });

    gen.next();
    const errorGen = gen.throw(new Error("error!!"));
    expect(errorGen.value.type).toEqual("PUT");
    expect(errorGen.value.payload.action).toEqual({
      type: "GET_RESTAURANTS_FAILED",
      message: "Unexpected error. Try again later.",
    });

    const finishLoadingGen = gen.next();
    expect(finishLoadingGen.value.type).toEqual("PUT");
    expect(finishLoadingGen.value.payload.action).toEqual({
      type: "LOADING",
      loading: false,
    });
  });
});
