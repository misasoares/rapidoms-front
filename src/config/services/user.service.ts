/* eslint-disable @typescript-eslint/no-explicit-any */
import { CreateUser } from "../../pages/Order";
import apiService from "./api.service";

export async function createUserAPI(data:CreateUser){
    try {
        const resposta = await apiService.post('/users', data)

        return {
            message: resposta.data?.message,
            code: resposta.data?.code,
            data: resposta.data?.data,
          };
    } catch (error:any) {
        return {
            message: error.response.data?.message,
            code: error.response.data?.code,
            data: error.response.data?.data,
          };
    }
}