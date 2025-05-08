import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  equipo: "Magallanes",
  capitan: "Javi Quiroz",
  posicion:"Medio Campista"
};

export const ascensoSlice = createSlice({
  name: 'ascenso', //el reducer se debe llamar en este caso ascensoReducer para el store
  initialState,
  reducers: {
    cambiarTemuco: (state) => {
      state.equipo = "Temuco", 
      state.capitan = "Yerko Urra",
      state.posicion="Portero"
    },
    cambiarRangers: (state) => {
        state.equipo = "Rangers", 
        state.capitan = "Bastian San Juan",
        state.posicion="Defensa Central"
    },
    volverMagallanes: (state) => {
        state.equipo= "Magallanes",
        state.capitan= "Javi Quiroz",
        state.posicion="Medio Campo"
    },
  },
});

export const { cambiarTemuco, cambiarRangers, volverMagallanes } = ascensoSlice.actions;

export default ascensoSlice.reducer;