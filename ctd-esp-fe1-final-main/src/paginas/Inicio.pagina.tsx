import Filtros from "../componentes/personajes/filtros.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { FC } from "react";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import { useSelector } from "../redux/store/store"
import { useDispatch } from "react-redux";
import { buscarPersonajesThunk } from "../redux/actions/actionPersonajes";
import { EstadoPersonaje } from "../redux/reducer/reducerPersonajes";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */

 const PaginaInicio = () => { 
const dispatch = useDispatch();
 const {arrayPersonajes,estado, busqueda, error} = useSelector<EstadoPersonaje>(state => state.personajes);
 const handleClick = (e:any) => 
  {
   dispatch(buscarPersonajesThunk("")) 
  }
 
 
    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={(e:any)=>handleClick(e)}>Borrar Busqueda</button>
         </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes />
       
    </div>
}

export default PaginaInicio