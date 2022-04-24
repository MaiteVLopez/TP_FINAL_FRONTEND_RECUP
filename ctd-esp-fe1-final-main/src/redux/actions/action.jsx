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


export const buscarPersonajes = ( nombreEnElFiltro ) => {
    return {
        type: "BUSCAR_PERSONAJE",
        nombreEnElFiltro
    }
}

/*export type PersonajesActin =
    | ReturnType<typeof buscarPersonajes>*/