import './paginacion.css';
import { buscarPersonajesThunk } from '../../redux/actions/actionPersonajes';
import { useDispatch } from 'react-redux';
import { useSelector } from "../../redux/store/store"
import estadoFiltro, { EstadoPersonaje } from '../../redux/reducer/reducerTarjetas';



let contador = 1;
const Paginacion = () => {
    

    //const {busqueda} = useSelector<EstadoPersonaje>(state => state.personajes)
  
    //const {arrayPersonajes,estado, busqueda} = useSelector(state => state.personajes)
    const dispatch = useDispatch();
    const onClickAnterior = () => {
        contador= contador - 1;
        dispatch(buscarPersonajesThunk(busqueda,contador))
        console.log("contador evento anterior"+contador);
    }   
    const {arrayPersonajes,estado, busqueda} = useSelector(state => state.personajes)
    console.log("busqueda: "+busqueda);
    const onClickSiguiente = () => {
        contador = contador + 1; 
        dispatch(buscarPersonajesThunk(busqueda,contador))
        console.log("contador evento siguiente"+contador);
    }


return <div className="paginacion">
        <button disabled={false} className={"primary"}
        onClick={() => onClickAnterior()}>Anterior</button>
        <button disabled={false} className={"primary"}
        onClick={() => onClickSiguiente()}>Siguiente</button>
    </div>
}

export default Paginacion;



/**
 * 
 * onClick={(e)=>
                                                                    {e.preventDefault();
                                                                    //buscarPersonajesThunk(busqueda,3+1);              
                                                                    }}
 * 
 */