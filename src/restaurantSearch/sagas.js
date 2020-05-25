import { call, put, takeLatest } from "redux-saga/effects";
import { getRestaurants } from "./restaurantsApi";

function* fetchRestaurants(params) {
  try {
    yield put({ type: "LOADING", loading: true });
    const city = params.city || "San Francisco";
    const response = yield call(getRestaurants, city);
    yield put({
      type: "RESTAURANTS_RETURNED",
      restaurants: response.restaurants,
    });
    yield put({ type: "LOADING", loading: false });
  } catch (e) {
    //TODO make error messages user friendly
    yield put({ type: "GET_RESTAURANTS_FAILED", message: e.message });
  }
}

function* mySaga() {
  yield takeLatest("GET_RESTAURANTS", fetchRestaurants);
}

export default mySaga;
