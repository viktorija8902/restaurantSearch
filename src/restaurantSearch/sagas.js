import { call, put, takeLatest } from "redux-saga/effects";
import { getRestaurants } from "./restaurantsApi";
import { addSearchData } from "./utils";

function* fetchRestaurants({ type, params }) {
  try {
    yield put({ type: "LOADING", loading: true });
    const response = yield call(getRestaurants, params.city);
    const restaurants = response.restaurants;
    let restaurantsWithSearchData;
    if (restaurants) {
      restaurantsWithSearchData = addSearchData(restaurants);
    }
    yield put({
      type: "RESTAURANTS_RETURNED",
      restaurants: restaurantsWithSearchData || [],
      message: restaurants.length ? "" : "No restaurants found.",
    });
    yield put({ type: "LOADING", loading: false });
  } catch (e) {
    console.error(e.message);
    yield put({
      type: "GET_RESTAURANTS_FAILED",
      message: "Unexpected error. Try again later.",
    });
  }
}

function* mySaga() {
  yield takeLatest("GET_RESTAURANTS", fetchRestaurants);
}

export default mySaga;
