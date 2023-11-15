import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BateryOrder {
  id: string;
  name: string;
  amper: number;
  cca: number;
  price: number;
  warranty: number;
}

export interface CarOrder {
    id:string
  name: string;
  yearFabrication: number;
}

export interface OrderType {
  battery: BateryOrder;
  car: CarOrder;
}

const initialState: OrderType = {
  battery: { id: "", name: "", amper: 0, cca: 0, price: 0, warranty: 0 },
  car: {id:"", name: "", yearFabrication: 0 },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    criarPedido(state, action: PayloadAction<OrderType>) {
      state.battery = action.payload.battery;
      state.car = action.payload.car;
    },
    limparPedido() {
      return initialState;
    },
  },
});

export const { criarPedido, limparPedido } = orderSlice.actions;
export default orderSlice.reducer;
