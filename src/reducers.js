import { combineReducers } from "redux";
import restaurantSearch from "./restaurantSearch/reducer";

const restaurantApp = combineReducers({
  restaurantSearch,
});

export default restaurantApp;
