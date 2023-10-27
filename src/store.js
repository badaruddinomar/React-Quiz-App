import { configureStore } from "@reduxjs/toolkit";
import { quizeReducer } from "./reducer";

const store = configureStore({
  reducer: quizeReducer,
});
export default store;
