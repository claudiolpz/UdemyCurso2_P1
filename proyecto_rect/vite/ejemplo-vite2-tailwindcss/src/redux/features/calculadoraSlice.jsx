import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numero1:10,
    numero2:10,
    resultado:0
}

export const calculadoraSlide = createSlice({
    name:'calculadora',//calculadoraReducer
    initialState,
    reducers:{
        sumar: (state)=>{
            state.resultado= state.numero1 + state.numero2
        },
        restar: (state)=>{
            state.resultado= state.numero1 - state.numero2
        },
        multiplicar: (state)=>{
            state.resultado= state.numero1 * state.numero2
        },
        dividir: (state)=>{
            if(state.numero1 !=0){
            state.resultado= state.numero1 / state.numero2
            }
            else{
                state.resultado=0;
            }
        },
        resetear: (state)=>{
            state.resultado= 0;
        },
    }
});

export const { sumar, restar, multiplicar, dividir, resetear} = calculadoraSlide.actions
export default calculadoraSlide.reducer
