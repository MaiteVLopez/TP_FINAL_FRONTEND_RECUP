import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import TarjetaPersonaje from "../../componentes/personajes/tarjeta-personaje.componente";
import { buscarPersonajesAPI } from "../../servicios/personajesServicios";
import { IRootState } from "../store/store";

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
//accion para cuando la llamada asinc se ejecute con error
export interface BusquedaPersonajeErrorAccion extends Action {
type: "BUSCAR_PERSONAJE_ERROR";
error: string
}
  
export type PersonajesAction = BusquedaPersonajeAccion | BusquedaPersonajeExitoAccion | BusquedaPersonajeErrorAccion;

//Interfaz del action con thunk
interface BuscarPersonajesThunkAction extends ThunkAction <void, IRootState, unknown, PersonajesAction> {}

export const buscarPersonajes:ActionCreator<BusquedaPersonajeAccion> = 
    (nombreEnElFiltro: string) => {
    return {
        type: "BUSCAR_PERSONAJE",
        nombreEnElFiltro
    }
} 

export const buscarPersonajesExito:ActionCreator<BusquedaPersonajeExitoAccion> = 
    (personajes: typeof TarjetaPersonaje[]) => {
    return {
        type: "BUSCAR_PERSONAJE_EXITO",
        arrayTarjetasPersonajes: personajes
    }
} 

export const buscarPersonasjeError:ActionCreator<BusquedaPersonajeErrorAccion> = 
    (error: string) => {
    return {
        type: "BUSCAR_PERSONAJE_ERROR",
        error: error
    }
}

//BUSCAR_SOLO_SI_HAY_MAS_DE_TRES_CARAACTERES

const MINIMOS_CARACETERS_BUSQUEDA = 3;
export const buscarPersonajeThonk = (nombreEnElFiltro: string) : BuscarPersonajesThunkAction => {
    return async (distpach, getState) => {
        //Que inicie la busqueda si hay tres letras en el filtro
        if(nombreEnElFiltro.length < MINIMOS_CARACETERS_BUSQUEDA ) return null;
        //despachamos la action de buscar personajes, el ditpach busca personajes, 
        //va a lanzar la funcion que va derecho al reducer y va a marcar 
        //el estado como buscando y el valor de la busqueda por el nombrefiltro
        distpach(buscarPersonajes(nombreEnElFiltro));
        try{
            //buscarPersonajesAPI es la funcion definida en los servicios, que hace el fetch y tiene los datos de backend
            const arrayPersonajes = await buscarPersonajesAPI(nombreEnElFiltro);
            distpach(buscarPersonajesExito(arrayPersonajes));
        }catch(e){
            distpach(buscarPersonasjeError(e))
        }
    }
} 
/*

const buscarPersonajes = ( nombreEnElFiltroEnElFiltro: any ) => {
    return {
        type: "BUSCAR_PERSONAJE",
        nombreEnElFiltroEnElFiltro
    }
}

export type PersonajesAction =
    | ReturnType<typeof buscarPersonajes>*/