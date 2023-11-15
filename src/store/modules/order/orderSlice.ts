import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface OrderType{
    userId:string
    batteryId:string
}

const initialState: OrderType = {
    userId:"",
    batteryId:""
}

const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{
        criarPedido(state, action:PayloadAction<OrderType>){
            state.userId = action.payload.userId
            state.batteryId = action.payload.batteryId
            
        },
        limparPedido(){
            return initialState
        }
    }
})

export const { criarPedido, limparPedido} = orderSlice.actions
export default orderSlice.reducer