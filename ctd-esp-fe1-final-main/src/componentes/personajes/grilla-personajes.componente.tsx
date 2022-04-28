import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import estadoFiltro, { EstadoPersonaje } from '../../redux/reducer/reducerTarjetas';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { IRootState } from '../../redux/store/store';
import TarjetaEpisodio from '../episodios/tarjeta-episodio.componente';
import Personaje from '../../tyoes/personaje';
import { FC } from 'react';
/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */

 export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

const GrillaPersonajes : FC = () => {

    const {arrayPersonajes,estado, busqueda} = useSelector<EstadoPersonaje>(state => state.personajes)

    if(estado === "CARGANDO") return <div>Cargando Tarjeta Personaje...</div>
    if(!busqueda || busqueda.length === 0 ) return <></>

    return <div className="grilla-personajes">
        {
            arrayPersonajes.map((personaje:Personaje) => {
                return (
                    <div key={"personaje" + personaje.name}>
                        <TarjetaPersonaje   img={personaje.image}
                                            name ={personaje.name}
                                            
                         />
                    </div>
                )
            })
        }
    </div>
    
/*
return <div className="grilla-personajes">
{
    <TarjetaPersonaje />
}
</div>
}
 */
}
export default GrillaPersonajes;