import { Reducer } from "react";
import Episodio from "../../types/episodio";
import { EpisodiosAction } from "../actions/actionEpisodios";

//typado 
export interface EpisodiosBuscados {
    busqueda:string;
    arrayEpisodios: Episodio[]
    episodio: Episodio;
    estado: "CARGANDO"|"COMPLETO"|"COMPLETO_CON_ERROR",
    error: string | null;
}

 const estadoInicial: EpisodiosBuscados = {
    busqueda: '',
    arrayEpisodios: [],
    episodio:{ id:0, name:"",characters:[],episode:"",air_date:"",created:"",url:""},
    estado: "COMPLETO",
    error: null
}
/*
 const estadoInicial = {
    serch: ''
};*/

//Typado
//BusquedaPersonajeAccion es la interfaz del action
//export const episodiosPersonajes:Reducer<EstadoPersonaje, BusquedaPersonajeAccion> = (state = estadoInicial, action):EstadoPersonaje

//const episodiosPersonajes = (state = estadoInicial, action) => {
export const episodiosPersonajes:Reducer<EpisodiosBuscados,EpisodiosAction> = (state= estadoInicial, action):EpisodiosBuscados =>{
    switch (action.type){
        case "BUSCAR_EPISODIO":
            return{
                ...state,
                busqueda: action.numerosEpisodios,
                estado: "CARGANDO",
                //para que se borre el error cuando cargo bn
                error: null,
            }  
           // break;
        case "BUSCAR_EPISODIO_EXITO":
            return{
                ...state,
                estado: "COMPLETO",
                episodio: action.episodio
            }
        case "BUSCAR_EPISODIOS_EXITO":
                return{
                    ...state,
                    estado: "COMPLETO",
                    arrayEpisodios: action.arrayEpisodios
                }
    
        case "BUSCAR_EPISODIO_ERROR":
            return{
                ...state,
                estado: "COMPLETO_CON_ERROR",
                arrayEpisodios: [],
                error: action.error
            }
        default:
            return state;
    }
} 

export default episodiosPersonajes;




/*
//Thunk

export const saveOrder = () => async (disoatch, getState) => {
    // Obtiene los datos de la Store que serán enviados a la API

    const order = getState().
}
*/