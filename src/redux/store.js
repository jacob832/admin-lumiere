import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/userReducer";

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  user: userReducer,
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;
