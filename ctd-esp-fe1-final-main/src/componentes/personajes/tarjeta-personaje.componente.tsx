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
    let favorito = true;
 const handleDetalle = (index:number,e:any) => 
    {
    navigate('/detalle');
    const indexStorage = index
    localStorage.setItem('index', JSON.stringify(indexStorage))
    dispatch(buscarEpisodiosThunk(handleFiltroEpisodios()))
    }
    const handleClick = (e:any) => 
    {
        console.log("entro aca")
        if(favorito)
             favorito=false;
    
        else
             favorito=true;
        return favorito
    } 
    return <div className="tarjeta-personaje">
        <img src={arrayPersonajes[props.index].image} 
                                    alt={props.name}
                                    onClick={(e) => handleDetalle(props.index,e)}/> 
        <div className="tarjeta-personaje-body">
        <span>{props.name}</span>  
        {
            favorito?<>return(<div><BotonFavorito esFavorito={true} onClick={(e:any)=>handleClick(e)}/></div>)</>
                    :<div>return(<BotonFavorito esFavorito={false} onClick={(e:any)=>handleClick(e)}/>)</div>
        } 
        
        </div>
    </div>
}

export default TarjetaPersonaje;