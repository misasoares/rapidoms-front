import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import productsSlice from "./products/productsSlice";

export default combineReducers({
  user: userSlice,
  products:productsSlice
});
