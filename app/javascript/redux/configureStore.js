import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "./fetchdata";

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
