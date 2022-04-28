import { useDispatch } from 'react-redux';
import { buscarPersonajesThunk } from '../../redux/actions/actionPersonajes';
import './filtros.css';

const Filtros= () => {

    const dispatch = useDispatch();

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" 
        onChange={(e) => dispatch(buscarPersonajesThunk(e.target.value))}
                placeholder="Rick, Morty, Beth, Alien, ...etc" 
                name="nombre" 
                autoFocus={true}/>
    </div>
}
export default Filtros;