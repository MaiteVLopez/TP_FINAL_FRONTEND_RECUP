
import estadoFiltro, { EstadoPersonaje } from '../../redux/reducer/reducerPersonajes';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import Personaje from '../../types/personaje';
import { FC } from 'react';
import { useSelector } from "../../redux/store/store"
/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */

 //export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

const GrillaPersonajes : FC = () => {

    const {arrayPersonajes,estado, busqueda, error} = useSelector<EstadoPersonaje>(state => state.personajes)
    let arrayPersonajesActualizados: Personaje[] = arrayPersonajes
    if(estado === "CARGANDO") return <div>Cargando Tarjeta Personaje...</div>
    if(estado === "COMPLETO_CON_ERROR") return <>Ocurrio un error: {error}</>
    if(!busqueda || busqueda.length === 0 ) return <></>
  
    const stringStorage:string|null = localStorage.getItem('arrayPersonaje');
    let strFavorito:string = "";
    if(stringStorage)
    {
        strFavorito = stringStorage;
    }  
    if(strFavorito)
    {
        arrayPersonajesActualizados = JSON.parse(strFavorito);
    }
    //console.log("array actualizado", arrayPersonajesActualizados)
     


return <div className="grilla-personajes">
        {arrayPersonajesActualizados?.map((personaje:Personaje, index:number) => {
                return (
                    <div key={"personaje" + personaje.id}>
                        <TarjetaPersonaje   
                                            name ={personaje.name}
                                            index={index}
                                            personajeFavorito={false}
                                           
                                            
                         />
                    </div>
                )
            })}
    </div>
}
 

export default GrillaPersonajes;