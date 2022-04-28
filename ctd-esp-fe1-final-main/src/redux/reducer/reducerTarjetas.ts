import { Reducer } from "react";
import Personaje from "../../tyoes/personaje";
import { PersonajesAction } from "../actions/actionPersonajes";

//typado 
export interface EstadoPersonaje {
    busqueda:string;
    arrayPersonajes: Personaje[];
    estado: "CARGANDO"|"COMPLETO"|"COMPLETO_CON_ERROR",
    error: string | null;
}

 const estadoInicial: EstadoPersonaje = {
    busqueda: '',
    arrayPersonajes: [],
    estado: "COMPLETO",
    error: null
}
/*
 const estadoInicial = {
    serch: ''
};*/

//Typado
//BusquedaPersonajeAccion es la interfaz del action
//export const estadoFiltro:Reducer<EstadoPersonaje, BusquedaPersonajeAccion> = (state = estadoInicial, action):EstadoPersonaje

//const estadoFiltro = (state = estadoInicial, action) => {
export const estadoFiltro:Reducer<EstadoPersonaje,PersonajesAction> = (state= estadoInicial, action):EstadoPersonaje =>{
    switch (action.type){
        case "BUSCAR_PERSONAJE":
            return{
                ...state,
                busqueda: action.nombreEnElFiltro,
                estado: "CARGANDO",
                //para que se borre el error cuando cargo bn
                error: null,
            }  
           // break;
        case "BUSCAR_PERSONAJE_EXITO":
            return{
                ...state,
                estado: "COMPLETO",
                arrayPersonajes: action.arrayPersonajes,
            }
        case "BUSCAR_PERSONAJE_ERROR":
            return{
                ...state,
                estado: "COMPLETO_CON_ERROR",
                arrayPersonajes: [],
                error: action.error
            }
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