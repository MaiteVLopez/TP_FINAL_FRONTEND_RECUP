import { useSelector } from 'react-redux';
import estadoFiltro from '../../redux/reducer/reducerTarjetas';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { IRootState } from '../../redux/store/store';
import TarjetaEpisodio from '../episodios/tarjeta-episodio.componente';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {

    //const {tarjetaPersonajes, estado} = useSelector(state => state.tarjetaPersonajes.name)

    //if(estado === "CARGANDO") return <div>Cargando Tarjeta Personaje...</div>
    //if(!tarjetaPersonajes || tarjetaPersonajes.length === 0 ) return <></>
/*
    return <div className="grilla-personajes">
        {
            tarjetaPersonajes.map((tarjeta) => {
                return (
                    <div key={"personaje" + tarjeta.name}>
                        <TarjetaPersonaje />
                    </div>
                )
            })
        }
    </div>
    */

return <div className="grilla-personajes">
{
    <TarjetaPersonaje />
}
</div>
}
 
export default GrillaPersonajes;