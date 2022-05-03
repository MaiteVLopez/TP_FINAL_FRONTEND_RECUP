import { Link, useNavigate } from 'react-router-dom';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { useSelector } from "../../redux/store/store"
import { EstadoPersonaje } from '../../redux/reducer/reducerTarjetas';
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
 const TarjetaPersonaje  = (props:any) => 
 {
 const navigate = useNavigate();
 const handleDetalle = (index:number) => 
    {
    navigate('/detalle');
    const indexStorage = index
    localStorage.setItem('index', JSON.stringify(indexStorage))
    }

    const {arrayPersonajes,estado, busqueda, error} = useSelector<EstadoPersonaje>(state => state.personajes)
    
    //console.log("props ",props.id)
    //console.log("array personaje ",arrayPersonajes[props.id])
    console.log("array personaje ",arrayPersonajes)
    return <div className="tarjeta-personaje">
        <img src={arrayPersonajes[props.index].image} 
                                    alt={props.name}
                                    onClick={() => handleDetalle(props.index)}/> 
        <div className="tarjeta-personaje-body">
            <span>{props.name}</span>
   
           
        </div>
    </div>
      
    /*
     <Link to={{ pathname: '/detalle'}}><img src={arrayPersonajes[props.index].image} alt={props.name}/> </Link>
    return <div className="tarjeta-personaje">
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez"/>
        <div className="tarjeta-personaje-body">
            <span>Rick Sanchez</span>
            <BotonFavorito esFavorito={false} />
        </div>
    </div>
 <BotonFavorito esFavorito={false} />
      <p className="linkRegistroOCrearCuenta">
        ¿Ya tienes una cuenta?
       
      </p>
    */
}

export default TarjetaPersonaje;