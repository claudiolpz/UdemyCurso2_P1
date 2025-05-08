import {configureStore} from '@reduxjs/toolkit'
import  ascensoReducer  from '../features/ascensoSlice'
import  calculadoraReduce from '../features/calculadoraSlice'
import parametrosReduce from '../features/parametrosSlice'
export const store = configureStore({
    reducer:{
        ascenso : ascensoReducer,
        calculadora: calculadoraReduce,
        parametros: parametrosReduce
    }
})