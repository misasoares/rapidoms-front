import apiService from "./api.service";

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function criarFabricaAPI(name: string) {
  try {
    const resposta = await apiService.post(`/factories/create/${name}`);

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

export async function pegarFabricas() {
  try {
    const resposta = await apiService.get("/factories/list-all");
    
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
