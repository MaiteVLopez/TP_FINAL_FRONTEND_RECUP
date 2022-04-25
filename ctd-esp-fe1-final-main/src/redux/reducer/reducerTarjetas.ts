import { Reducer } from "react";
import TarjetaPersonaje from "../../componentes/personajes/tarjeta-personaje.componente";
import { PersonajesAction } from "../actions/actionPersonajes";

//typado 
export interface EstadoPersonaje {
    busqueda:string;
    arrayTarjetasPersonajes: typeof TarjetaPersonaje[];
    error: string | null;
  
}



 const estadoInicial: EstadoPersonaje = {
    busqueda: '',
    arrayTarjetasPersonajes: [],
    error: 'Hay un error' 
}
/*
 const estadoInicial = {
    serch: ''
};*/

//Typado
//BusquedaPersonajeAccion es la interfaz del action
//export const estadoFiltro:Reducer<EstadoPersonaje, BusquedaPersonajeAccion> = (state = estadoInicial, action):EstadoPersonaje

//const estadoFiltro = (state = estadoInicial, action) => {
export const estadoFiltro:Reducer<EstadoPersonaje,PersonajesAction> = (state = estadoInicial, action):EstadoPersonaje =>{
    switch (action.type){
        case "BUSCAR_PERSONAJE":
            return{
                ...state,
                busqueda: action.nombreEnElFiltro
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