import { Reducer } from "react";
import Personaje from "../../types/personaje";
import { FavoritosAction } from "../actions/actionFavoritos";

//typado 
export interface FavoritoMarcado {
    marcado: boolean,
    arrayFavoritos: Personaje[],
    estadoFavorito: "MARCADO_CORRECTO"|"MARCADO_ERROR",
    errorFavorito: string | null
}

 const estadoInicial: FavoritoMarcado = {
    marcado: false,
    arrayFavoritos: [],
    estadoFavorito: "MARCADO_CORRECTO",
    errorFavorito: null
}

//Typado
//BusquedaPersonajeAccion es la interfaz del action
//export const marcarDesmarcarFavoritos:Reducer<EstadoPersonaje, BusquedaPersonajeAccion> = (state = estadoInicial, action):EstadoPersonaje

//const marcarDesmarcarFavoritos = (state = estadoInicial, action) => {
export const marcarDesmarcarFavoritos:Reducer<FavoritoMarcado,FavoritosAction> = (state= estadoInicial, action):FavoritoMarcado =>{
    switch (action.type){
        case "MARCAR_FAVORITO":
            return{
                ...state,
                marcado: action.marcado,
                arrayFavoritos: action.arrayFavoritos,
                estadoFavorito: "MARCADO_CORRECTO",
                errorFavorito: null,
            }  
        case "DESMARCAR_FAVORITO":
            return{
                ...state,
                marcado: action.marcado,
                arrayFavoritos: action.arrayFavoritos,
                estadoFavorito: "MARCADO_CORRECTO"
            }
        case "MARCAR_DESMARCAR_ERROR":
                return{
                    ...state,
                    estadoFavorito: "MARCADO_ERROR",
                    errorFavorito: action.error
                }
        default:
            return state;
    }
} 

export default marcarDesmarcarFavoritos;
