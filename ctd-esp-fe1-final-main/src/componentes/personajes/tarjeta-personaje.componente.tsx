import { Link, useNavigate } from "react-router-dom";
import BotonFavorito from "../botones/boton-favorito.componente";
import { useDispatch } from "react-redux";
import "./tarjeta-personaje.css";
import { useSelector } from "../../redux/store/store";
import { EstadoPersonaje } from "../../redux/reducer/reducerPersonajes";
import { buscarEpisodiosThunk } from "../../redux/actions/actionEpisodios";
import { useEffect } from "react";
import { FavoritoMarcado } from "../../redux/reducer/reducerFavoritos";
import { desmarcarFavoritoAction, marcarFavoritosAction, marcarFavoritosThunkAction } from "../../redux/actions/actionFavoritos";
import Personaje from "../../types/personaje";
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */
const TarjetaPersonaje = (props:any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { arrayPersonajes, estado, busqueda, error } =
    useSelector<EstadoPersonaje>((state) => state.personajes);
  const {marcado,estadoFavorito,errorFavorito} = useSelector<FavoritoMarcado>(state => state.favoritos);
  const handleFiltroEpisodios = (): string[] => {
    const episodios: string[] = arrayPersonajes[props.index].episode;
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
  let favorito:boolean = false;
  const handleClick = () => { 
   /*   if(favorito)
        favorito = false;
      else  
        favorito = true;
      console.log("fav del personaje",favorito)*/
      if(marcado)
      {
        dispatch(marcarFavoritosThunkAction(1,marcado)) 
          favorito = false
         //src = "/imagenes/star.png"
         
      
      }
  else{
    dispatch(marcarFavoritosThunkAction(3,marcado))  
      favorito = true
      //src = "/imagenes/star-filled.png"
      
      
     
  }
    };

  return (
    <div className="tarjeta-personaje">
      <img
        src={arrayPersonajes[props.index].image}
        alt={props.name}
        onClick={(e) => handleDetalle(props.index, e)}
      />
      <div className="tarjeta-personaje-body">
        <span>{props.name}</span>
     
          
            <div>
              <BotonFavorito esFavorito={favorito} onClick={() =>handleClick()} />
            </div>
      
        
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
