/* eslint-disable @typescript-eslint/no-explicit-any */
import apiService from "./api.service";

export interface SaleDTO {
  batteryId: string;
  carId: string;
  userID: string;
}

export async function saleAPI(data: SaleDTO) {
  try {
    const resposta = await apiService.post("/sales/create", data);
    console.log(resposta, "sale response");
  } catch (error: any) {
    return {
      message: error.response.data?.message,
      code: error.response.data?.code,
      data: error.response.data?.data,
    };
  }
}
