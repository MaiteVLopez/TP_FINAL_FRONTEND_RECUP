import './grilla-episodio.css';
import Episodio from '../../types/episodio';
import { FC } from 'react';
import { useSelector } from "../../redux/store/store"
import episodiosPersonajes from '../../redux/reducer/reducerEpisodios';
import TarjetaEpisodio from './tarjeta-episodio.componente';
import { dir } from 'console';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */

 //export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

const GrillaEpisodio = () => {
/*
    const {arrayEpisodios,estado, busqueda, error} = useSelector<EstadoPersonaje>(state => state.personajes)

    if(estado === "CARGANDO") return <div>Cargando Tarjeta Personaje...</div>
    if(estado === "COMPLETO_CON_ERROR") return <>Ocurrio un error: {error}</>
    if(!busqueda || busqueda.length === 0 ) return <></>
    console.log("ARRAY EN LA GRILLA"+arrayPersonajes)

*/

    

/*
return <div className="grilla-personajes">
{
    <TarjetaPersonaje />
}
</div>
*/
}
 

export default GrillaEpisodio;