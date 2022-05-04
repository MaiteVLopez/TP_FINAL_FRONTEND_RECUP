import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import TarjetaEpisodio from "../../componentes/episodios/tarjeta-episodio.componente";
import { buscarEpisodiosAPI , buscarEpisodioAPI} from "../../servicios/episodiosServicios";
import Episodio from "../../types/episodio";
import { IRootState } from "../store/store";

// typado
export interface BusquedaEpisodioAccion extends  Action {
type: "BUSCAR_EPISODIO";
numerosEpisodios: string
}

//accion para cuando la llamada asinc se ejecute con exito
export interface BusquedaEpisodiosExitoAccion extends Action {
type: "BUSCAR_EPISODIOS_EXITO";
//se evuelven los episodios
arrayEpisodios: Episodio[],
}

//accion para cuando la llamada asinc se ejecute con exito
export interface BusquedaEpisodioExitoAccion extends Action {
    type: "BUSCAR_EPISODIO_EXITO";
    //se evuelven los episodios
    episodio: Episodio
    }
//accion para cuando la llamada asinc se ejecute con error
export interface BusquedaEpisodioErrorAccion extends Action {
type: "BUSCAR_EPISODIO_ERROR";
error: string
}
  
export type EpisodiosAction = BusquedaEpisodioAccion | BusquedaEpisodioExitoAccion | BusquedaEpisodiosExitoAccion |BusquedaEpisodioErrorAccion;

//Interfaz del action con thunk
interface BuscarEpisodiosThunkAction extends ThunkAction <void, IRootState, unknown, EpisodiosAction> {}

export const buscarEpisodios:ActionCreator<BusquedaEpisodioAccion> = 
    (numerosEpisodios: string) => {
    return {
        type: "BUSCAR_EPISODIO",
        numerosEpisodios,
    }
} 

export const buscarEpisodioExito:ActionCreator<BusquedaEpisodioExitoAccion> = 
    ( episodio: Episodio) => {
    return {
        type: "BUSCAR_EPISODIO_EXITO",
        episodio: episodio
    }
} 


export const buscarEpisodiosExito:ActionCreator<BusquedaEpisodiosExitoAccion> = 
    (episodios: Episodio[]) => {
    return {
        type: "BUSCAR_EPISODIOS_EXITO",
        arrayEpisodios: episodios,
    }
} 

export const buscarEpisodiosError:ActionCreator<BusquedaEpisodioErrorAccion> = 
    (error: string) => {
    return {
        type: "BUSCAR_EPISODIO_ERROR",
        error: error
    }
}

//BUSCAR_SOLO_SI_HAY_MAS_DE_TRES_CARAACTERES

export const buscarEpisodiosThunk = (numerosEpisodios: string[]) : BuscarEpisodiosThunkAction => {
    return async (distpach, getState) => {
        //Que inicie la busqueda si hay tres letras en el filtro
        if(numerosEpisodios.length < 1 ) return null;
        //despachamos la action de buscar episodios, el ditpach busca episodios, 
        //va a lanzar la funcion que va derecho al reducer y va a marcar 
        //el estado como buscando y el valor de la busqueda por el nombrefiltro
        distpach(buscarEpisodios(numerosEpisodios));
        try{
            //buscarPersonajesAPI es la funcion definida en los servicios, que hace el fetch y tiene los datos de backend
            
           
            if(numerosEpisodios.length === 1)
                {
                    const episodio: Episodio = await buscarEpisodioAPI(numerosEpisodios); 
                    distpach(buscarEpisodioExito(episodio));       
                }
            else
            {
                const arrayEpisodios = await buscarEpisodiosAPI(numerosEpisodios);
                 distpach(buscarEpisodiosExito(arrayEpisodios));
            }
        }catch(e){
            distpach(buscarEpisodiosError(e))
        }
    }
} 
