import { Action, ActionCreator } from "@reduxjs/toolkit";

/**
 * typado
 * export interface BusquedaPersonajeAccion extend Action {
 *  type: "BUSCAR_PERSONAJE";
 *  nombre: string
 * }
 * 
 * 
export const buscarPersonajes:ActionCreator<BusquedaPersonajeAccion> = 
    (nombre: string) => {
    return {
        type: "BUSCAR_PERSONAJE",
        nombre
    }
}
 */


export const buscarPersonajes = ( nombre ) => {
    return {
        type: "BUSCAR_PERSONAJE",
        nombre
    }
}