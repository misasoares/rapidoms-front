import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserType {
  id: string;
  name: string;
  email: string;
  rua: string;
  numeroDaCasa: number
  bairro: string
  cidade:string
  estado:string
  phone: string;
  cpf: string;
  token: string;
}

const initialState: UserType = {
  id: "",
  name: "",
  email: "",
  rua: "",
  numeroDaCasa:-1,
  bairro:"",
  cidade:"",
  estado:"",
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
      state.rua = action.payload.rua;
      state.numeroDaCasa = action.payload.numeroDaCasa
      state.bairro = action.payload.bairro
      state.cidade = action.payload.cidade
      state.estado = action.payload.estado
      state.phone = action.payload.phone;
      state.cpf = action.payload.cpf;
      state.token = action.payload.token;
    },
  },
});

export const { logado } = userSlice.actions;
export default userSlice.reducer;
