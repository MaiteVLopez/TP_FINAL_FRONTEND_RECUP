import { useDispatch } from 'react-redux';
import { buscarPersonajesThunk } from '../../redux/actions/actionPersonajes';
import './filtros.css';
import { useSelector } from "../../redux/store/store"
import { EstadoPersonaje } from '../../redux/reducer/reducerPersonajes';
import { useEffect } from 'react';

const Filtros = ()  => {

    const dispatch = useDispatch();
    const {arrayPersonajes,estado, busqueda, error} = useSelector<EstadoPersonaje>(state => state.personajes)
       
    const handlePersistenciaArrayPersonajes = () => {
        localStorage.setItem("arrayPersonajes", JSON.stringify(arrayPersonajes));
      };

    const handleClick = (e:any) => {
      dispatch(buscarPersonajesThunk(e.target.value));
      handlePersistenciaArrayPersonajes();
    }

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" 
        onChange={(e:any) => {handleClick(e)}}
                placeholder="Rick, Morty, Beth, Alien, ...etc" 
                name="nombre" 
                autoFocus={true}/>
    </div>
}
export default Filtros;