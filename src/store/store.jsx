import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../user"; // Make sure this import is correct
import authSlice from "../views/pages/Authentication/store/authSlice";
import { authApi } from "../views/pages/Authentication/authApi";

const reducer = {
  user: userSlice.reducer, 
  auth:authSlice,
  [authApi.reducerPath]: authApi.reducer,

};

const store = configureStore({
  reducer: reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware)
});

export default store;
