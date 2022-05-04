import { Link, useNavigate } from "react-router-dom";
import BotonFavorito from "../botones/boton-favorito.componente";
import { useDispatch } from "react-redux";
import "./tarjeta-personaje.css";
import { useSelector } from "../../redux/store/store";
import { EstadoPersonaje } from "../../redux/reducer/reducerPersonajes";
import { buscarEpisodiosThunk } from "../../redux/actions/actionEpisodios";
import { FavoritoMarcado } from "../../redux/reducer/reducerFavoritos";
import {
  marcarFavoritosThunkAction,
} from "../../redux/actions/actionFavoritos";
import Personaje from "../../types/personaje";

interface propsTarjetaPersonaje{
  name:string,
  index:number
}

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * @author Maite Lopez
 * @param {string} name
 * @param {number} index
 * @returns {JSX.Element}
 */
const TarjetaPersonaje = ({name,index}: propsTarjetaPersonaje): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { arrayPersonajes, estado, busqueda, error } =
    useSelector<EstadoPersonaje>((state) => state.personajes);
  const { marcado, estadoFavorito, errorFavorito,arrayFavoritos } =
    useSelector<FavoritoMarcado>((state) => state.favoritos);
  const handleFiltroEpisodios = (): string[] => {
    const episodios: string[] = arrayPersonajes[index].episode;
    let arrayEpisodios: string[] = [];
    const strParaCortar = "https://rickandmortyapi.com/api/episode/";
    episodios?.map((episodio: string) =>
      arrayEpisodios.push(episodio.substr(strParaCortar.length))
    );
    return arrayEpisodios;
  };

  const handleDetalle = (index: number, e: any) => {
    navigate("/detalle");
    const indexStorage = index;
    localStorage.setItem("index", JSON.stringify(indexStorage));
    dispatch(buscarEpisodiosThunk(handleFiltroEpisodios()));
  };
 

  const handlePersistenciaFavorito = () => {
    localStorage.setItem("arrayFavoritos", JSON.stringify(arrayFavoritos));
  };
  
  const handleFavorito = () => {
   // marcado = arrayPersonajes[index].favorito
    if (marcado) {
      dispatch(marcarFavoritosThunkAction(index, marcado, arrayFavoritos));
    } else {
      arrayFavoritos.push(arrayPersonajes[index]);
      dispatch(marcarFavoritosThunkAction(index, marcado, arrayFavoritos));
    }
    arrayPersonajes[index].favorito = marcado;
    handlePersistenciaFavorito();
  };

  const handleActualizarFavorito = () => {
    const stringStorage:string|null = localStorage.getItem('arrayFavoritos');
    let strFavorito:string = "";
    if(stringStorage)
    {
       strFavorito = stringStorage; 
    }  
    //arrayFavoritos = JSON.parse(strFavorito)
   
  }
 
  return (
    <div className="tarjeta-personaje">
      <img
        src={arrayPersonajes[index].image}
        alt={name}
        onClick={(e) => handleDetalle(index, e)}
      />
      <div className="tarjeta-personaje-body">
        <span>{name}</span>
        <div>
          <BotonFavorito esFavorito={arrayPersonajes[index].favorito} onClick={() => handleFavorito()} />
        </div>
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
