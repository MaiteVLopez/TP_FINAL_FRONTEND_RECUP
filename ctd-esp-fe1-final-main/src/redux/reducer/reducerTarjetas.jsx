import { Reducer } from "react";

/**typado 
 * export interface EstadoPersonaje {
 * serch:string;
 * }
 * 
 * 
 */

/**
 *const estadoInicial: EstadoPersonaje = {
    serch: ''
}; 
 */
 const estadoInicial = {
    serch: ''
};

//Typado
//BusquedaPersonajeAccion es la interfaz del action
//export const estadoFiltro:Reducer<EstadoPersonaje, BusquedaPersonajeAccion> = (state = estadoInicial, action):EstadoPersonaje

const estadoFiltro = (state = estadoInicial, action) => {
    switch (action.type){
        case "BUSCAR_PERSONAJE":
            return{
                ...state,
                serch: action.nombre
            }  
           // break;
        default:
            return state;
    }
} 

export default estadoFiltro;

/*
//Thunk

export const saveOrder = () => async (disoatch, getState) => {
    // Obtiene los datos de la Store que serán enviados a la API

    const order = getState().
}
*/