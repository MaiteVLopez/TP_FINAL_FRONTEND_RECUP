
import estadoFiltro, { EstadoPersonaje } from '../../redux/reducer/reducerTarjetas';
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

    if(estado === "CARGANDO") return <div>Cargando Tarjeta Personaje...</div>
    if(estado === "COMPLETO_CON_ERROR") return <>Ocurrio un error: {error}</>
    if(!busqueda || busqueda.length === 0 ) return <></>
    console.log("ARRAY EN LA GRILLA"+arrayPersonajes)


return <div className="grilla-personajes">
        {
            
            arrayPersonajes?.map((personaje:Personaje, index:number) => {
                return (
                    <div key={"personaje" + personaje.id}>
                        <TarjetaPersonaje   img={personaje.image}
                                            name ={personaje.name}
                                            index={index}
                                            
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
*/
}
 

export default GrillaPersonajes;