import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { buscarPersonajesAPI } from "../../servicios/personajesServicios";
import Personaje from "../../types/personaje";
import { IRootState } from "../store/store";

interface Info {
    count:number,
    pages:number,
    next:string,
    prev:string
}
// typado
export interface BusquedaPersonajeAccion extends  Action {
type: "BUSCAR_PERSONAJE";
nombreEnElFiltro: string
}

//accion para cuando la llamada asinc se ejecute con exito
export interface BusquedaPersonajeExitoAccion extends Action {
type: "BUSCAR_PERSONAJE_EXITO";
//se evuelven tarjetas con los personajes
arrayPersonajes: Personaje[],
info: Info
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
        nombreEnElFiltro,
    }
} 

export const buscarPersonajesExito:ActionCreator<BusquedaPersonajeExitoAccion> = 
    (personajes: Personaje[], info: Info) => {
    return {
        type: "BUSCAR_PERSONAJE_EXITO",
        arrayPersonajes: personajes,
        info: info
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

//const MINIMOS_CARACETERS_BUSQUEDA = 3;
export const buscarPersonajesThunk = (nombreEnElFiltro: string) : BuscarPersonajesThunkAction => {
    return async (distpach, getState) => {
        //Que inicie la busqueda si hay tres letras en el filtro
      //  if(nombreEnElFiltro.length < MINIMOS_CARACETERS_BUSQUEDA ) return null;
        //despachamos la action de buscar personajes, el ditpach busca personajes, 
        //va a lanzar la funcion que va derecho al reducer y va a marcar 
        //el estado como buscando y el valor de la busqueda por el nombrefiltro
        distpach(buscarPersonajes(nombreEnElFiltro));
        try{
            //buscarPersonajesAPI es la funcion definida en los servicios, que hace el fetch y tiene los datos de backend
            //const arrayPersonajes = await buscarPersonajesAPI(nombreEnElFiltro,page); 
            const data = await buscarPersonajesAPI(nombreEnElFiltro);
            distpach(buscarPersonajesExito(data.results, data.info));
            //console.log("info",data.info);
            //console.log("results",data.results);
            //console.log("data", data);
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