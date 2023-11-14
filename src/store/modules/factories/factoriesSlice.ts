import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FactoryType {
  id: string;
  name: string;
}

const initialState: FactoryType[] = [];

const factoriesSlice = createSlice({
  name: "factories",
  initialState,
  reducers: {
    createFactory(state, action: PayloadAction<FactoryType>) {
        state.push(action.payload)
        return state
    },
    limparFactories(){
        return initialState
    }
  },
});

export const { createFactory, limparFactories} = factoriesSlice.actions
export default factoriesSlice.reducer