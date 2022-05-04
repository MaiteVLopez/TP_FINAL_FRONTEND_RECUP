import { FC } from "react";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import { useSelector } from "../redux/store/store"
import { useDispatch } from "react-redux";
import { buscarPersonajesThunk } from "../redux/actions/actionPersonajes";
import { EstadoPersonaje } from "../redux/reducer/reducerPersonajes";
/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
 const PaginaFavoritos :FC = () => {

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" >Borrar favorito</button>
        </div>
        
    </div>
}

export default PaginaFavoritos