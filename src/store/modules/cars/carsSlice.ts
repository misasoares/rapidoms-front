import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BateryType } from "../products/productsSlice";
import { FactoryType } from "../factories/factoriesSlice";

export interface CarType {
  name: string;
  yearFabrication: number;
  id: string;
  factory: FactoryType;
  battery: BateryType[];
}

const initialState: CarType[] = [];

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    createCar(state, action: PayloadAction<CarType>) {
      state.push(action.payload);
      return state;
    },
    limparCarros() {
      return initialState;
    },
  },
});

export const { createCar, limparCarros } = carsSlice.actions;
export default carsSlice.reducer;
