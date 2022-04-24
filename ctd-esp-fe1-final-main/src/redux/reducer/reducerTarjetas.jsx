import { Reducer } from "react";

/**typado 
 * export interface EstadoPersonaje {
 * serch:string;
 * }
 * 
 * 
 */

/**
 *const estadoInicial: EstadoPersonaje = {
    serch: ''
}; 
 */
 const estadoInicial = {
    serch: ''
};

//Typado
//export const estadoFiltro:Reducer<EstadoPersonaje, any> = (state = estadoInicial, action):any

const estadoFiltro = (state = estadoInicial, action) => {
    switch (action.type){
        case "BUSCAR_PERSONAJE":
            return{
                ...state,
                serch: action.name
            }  
           // break;
        default:
            return state;
    }
} 

export default estadoFiltro;