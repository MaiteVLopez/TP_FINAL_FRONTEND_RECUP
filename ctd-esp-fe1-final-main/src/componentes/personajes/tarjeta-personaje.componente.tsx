import { Link, useNavigate } from 'react-router-dom';
import BotonFavorito from '../botones/boton-favorito.componente';
import { useDispatch } from 'react-redux';
import './tarjeta-personaje.css';
import { useSelector } from "../../redux/store/store"
import { EstadoPersonaje } from '../../redux/reducer/reducerPersonajes';
import { buscarEpisodiosThunk } from '../../redux/actions/actionEpisodios';
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
 const dispatch = useDispatch();
 const {arrayPersonajes,estado, busqueda, error} = useSelector<EstadoPersonaje>(state => state.personajes);

 const handleFiltroEpisodios = () :string[]=>
    {
    const episodios: string[] = arrayPersonajes[props.index].episode;
    let arrayEpisodios : string[] = []
    const strParaCortar = 'https://rickandmortyapi.com/api/episode/';
    episodios?.map((episodio:string) => arrayEpisodios.push(episodio.substr(strParaCortar.length)))
    return arrayEpisodios;
    }

 const handleDetalle = (index:number,e:any) => 
    {
    navigate('/detalle');
    const indexStorage = index
    localStorage.setItem('index', JSON.stringify(indexStorage))
    dispatch(buscarEpisodiosThunk(handleFiltroEpisodios()))
    }
    return <div className="tarjeta-personaje">
        <img src={arrayPersonajes[props.index].image} 
                                    alt={props.name}
                                    onClick={(e) => handleDetalle(props.index,e)}/> 
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