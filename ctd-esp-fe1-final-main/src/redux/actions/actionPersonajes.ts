import { Action, ActionCreator } from "@reduxjs/toolkit";
import TarjetaPersonaje from "../../componentes/personajes/tarjeta-personaje.componente";
 // typado
  export interface BusquedaPersonajeAccion extends  Action {
   type: "BUSCAR_PERSONAJE";
   nombreEnElFiltro: string
  }
  
  //accion para cuando la llamada asinc se ejecute con exito
  export interface BusquedaPersonajeExitoAccion extends Action {
   type: "BUSCAR_PERSONAJE_EXITO";
  //se evuelven tarjetas con los personajes
   arrayTarjetasPersonajes: typeof TarjetaPersonaje[]
  }
  

  export interface BusquedaPersonajeErrorAccion extends Action {
   type: "BUSCAR_PERSONAJE_ERROR";
   error: string
  }
  
export const buscarPersonajes:ActionCreator<BusquedaPersonajeAccion> = 
    (nombreEnElFiltro: string) => {
    return {
        type: "BUSCAR_PERSONAJE",
        nombreEnElFiltro
    }
}
 
/*

const buscarPersonajes = ( nombreEnElFiltroEnElFiltro: any ) => {
    return {
        type: "BUSCAR_PERSONAJE",
        nombreEnElFiltroEnElFiltro
    }
}
*/


export type PersonajesAction = BusquedaPersonajeAccion | BusquedaPersonajeExitoAccion | BusquedaPersonajeErrorAccion 
/*export type PersonajesAction =
    | ReturnType<typeof buscarPersonajes>*/