/* eslint-disable @typescript-eslint/no-explicit-any */
import { BateryType } from "../../store/modules/products/productsSlice";
import apiService from "./api.service";

export async function criarBateriaAPI(data: BateryType) {
  try {
    const resposta = await apiService.post("/batteries/criar", data);

    return {
      message: resposta.data?.message,
      code: resposta.data?.code,
      data: resposta.data?.data,
    };

  } catch (error: any) {
    return {
      message: error.response.data?.message,
      code: error.response.data?.code,
      data: error.response.data?.data,
    };
  }
}

export async function pegarBaterias() {
  try {
    const resposta = await apiService.get('/batteries/pegar')

    return {
      message: resposta.data?.message,
      code: resposta.data?.code,
      data: resposta.data?.data,
    };

  } catch (error: any) {
    return {
      message: error.response.data?.message,
      code: error.response.data?.code,
      data: error.response.data?.data,
    };
  }
}
