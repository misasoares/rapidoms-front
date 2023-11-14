import { CarType } from "../../pages/CriarCarros";
import apiService from "./api.service";

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function criarCarroAPI(data: CarType) {
  try {
    const resposta = await apiService.post("/cars/create", { ...data, batteryId: data.batteryId.split(", ") });
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

export async function pegarCarros() {
  try {
    const resposta = await apiService.get("/cars/list");

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
