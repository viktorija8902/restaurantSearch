import { call, put, takeLatest } from "redux-saga/effects";
import { getRestaurants } from "./restaurantsApi";
import { addSearchData } from "./utils";

export function* fetchRestaurants({ params }) {
  try {
    yield put({ type: "LOADING", loading: true });
    const response = yield call(getRestaurants, params.city);
    const restaurants = response.restaurants;
    let restaurantsWithSearchData;
    if (restaurants) {
      restaurantsWithSearchData = yield call(addSearchData, restaurants);
    }
    yield put({
      type: "RESTAURANTS_RETURNED",
      restaurants: restaurantsWithSearchData || [],
      message: restaurants.length ? "" : "No restaurants found.",
    });
  } catch (e) {
    yield put({
      type: "GET_RESTAURANTS_FAILED",
      message: "Unexpected error. Try again later.",
    });
  } finally {
    yield put({ type: "LOADING", loading: false });
  }
}

function* mySaga() {
  yield takeLatest("GET_RESTAURANTS", fetchRestaurants);
}

export default mySaga;
