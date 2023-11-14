import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import productsSlice from "./products/productsSlice";
import carsSlice from "./cars/carsSlice";
import factoriesSlice from "./factories/factoriesSlice";

export default combineReducers({
  user: userSlice,
  products: productsSlice,
  cars: carsSlice,
  factories: factoriesSlice
});
