import { createStore } from "redux";
import hotelReducer from "./reducers/hotelReducer";

const store = createStore(hotelReducer);

export default store;
