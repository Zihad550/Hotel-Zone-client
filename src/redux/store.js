import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import hotelReducer from "./reducers/hotelReducer";

/* const rootReducer = combineReducers({
  hotel: hotelReducer,
}); */
const store = createStore(hotelReducer, composeWithDevTools());

export default store;
