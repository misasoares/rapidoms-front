import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserType {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  cpf: string;
  token: string;
}

const initialState: UserType = {
  id: "",
  name: "",
  email: "",
  address: "",
  phone: "",
  cpf: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logado: (state, action: PayloadAction<UserType>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.address = action.payload.address;
      state.phone = action.payload.phone;
      state.cpf = action.payload.cpf;
      state.token = action.payload.token;
    },
  },
});

export const { logado } = userSlice.actions;
export default userSlice.reducer;
