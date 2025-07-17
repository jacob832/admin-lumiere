import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { combineReducers } from "redux";
import { userSlice } from "./user"; 


const persistConfig = {
  key: "root",
  storage,
};

// دمج الـ reducers (حتى لو عندك واحد فقط الآن)
const rootReducer = combineReducers({
  user: userSlice.reducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});


export const persistor = persistStore(store);
export default store;
