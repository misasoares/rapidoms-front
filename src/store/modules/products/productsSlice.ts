import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BateryType {
  img:string
  id:string
  name: string;
  amper: number;
  cca: number;
  warranty: number;
  quantity: number;
  price: number;
}

const initialState: BateryType[] = [];

const productsSlice = createSlice({
  name: "baterias",
  initialState,
  reducers: {
    criarBateria: (state, action: PayloadAction<BateryType>) => {
      state.push(action.payload);
      return state;
    },
    limparBaterias:()=>{
     return initialState
    }
  },
});

export const { criarBateria, limparBaterias } = productsSlice.actions;
export default productsSlice.reducer;
