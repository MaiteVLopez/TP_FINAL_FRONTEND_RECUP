import './paginacion.css';
import { buscarPersonajesThunk } from '../../redux/actions/actionPersonajes';
import { useDispatch } from 'react-redux';
import { useSelector } from "../../redux/store/store"
import estadoFiltro, { EstadoPersonaje } from '../../redux/reducer/reducerPersonajes';



let contador = 1;
const Paginacion = () => {
    let disabledNext = false;
    let disabledPrev = false;
    if(contador <= 1)
    {
        disabledPrev = true;
    }
    //const {busqueda} = useSelector<EstadoPersonaje>(state => state.personajes)
  
    //const {arrayPersonajes,estado, busqueda} = useSelector(state => state.personajes)
   // const dispatch = useDispatch();
    const {arrayPersonajes,estado, busqueda,info} = useSelector(state => state.personajes)
   /*
    if(arrayPersonajes.lenght == 0)
        {
            disabledNext = true;
        }
    */
    
    console.log("info"+info);
    const onClickAnterior = () => {
        
        contador= contador - 1;
        
        //dispatch(buscarPersonajesThunk(busqueda,contador))
    }   
    const onClickSiguiente = () => {
        contador = contador + 1; 
     //   dispatch(buscarPersonajesThunk(busqueda,contador))
    }


return <div className="paginacion">
        <button disabled={disabledPrev} className={"primary"}
        onClick={() => onClickAnterior()}>Anterior</button>
        <button disabled={disabledNext} className={"primary"}
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