import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import hotelBookingReducer from "./reducers/hotelBookingReducer";
import hotelReducer from "./reducers/hotelReducer";

const rootReducer = combineReducers({
  hotel: hotelReducer,
  bookingInfo: hotelBookingReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
