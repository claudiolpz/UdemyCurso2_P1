import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nombre: "",
  perfil_id: 3,
  perfil:""
};

export const parametrosSlice = createSlice({
  name: 'parametros', //el reducer se debe llamar en este caso parametrosReducer para el store
  initialState,
  reducers: {
    iniciarSesion: (state, datos) => {
      state.nombre = datos.payload.nombre,
      state.perfil_id = datos.payload.perfil_id,
      state.perfil = datos.payload.perfil
    }
  },
});

export const { iniciarSesion } = parametrosSlice.actions;

export default parametrosSlice.reducer;