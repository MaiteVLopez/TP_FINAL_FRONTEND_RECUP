import { FC } from "react";
import { useSelector } from "../../src/redux/store/store";
import '../componentes/personajes/grilla-personajes.css';
import { FavoritoMarcado } from "../redux/reducer/reducerFavoritos";
import Personaje from '../../src/types/personaje';
import TarjetaPersonaje from '../componentes/personajes/tarjeta-personaje.componente';
/**
 *   
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
 const PaginaFavoritos :FC = () => {

    const {marcado, estadoFavorito, errorFavorito,arrayFavoritos} =
    useSelector<FavoritoMarcado>((state) => state.favoritos);
    const handleCargarFavoritos = (e:any) => {
       
      };

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={(e:any)=>handleCargarFavoritos(e)}>Borrar favorito</button>
            <div className="grilla-personajes">
            {arrayFavoritos?.map((personaje:Personaje, index:number) => {
                return (
                    <div key={"personaje" + personaje.id}>
                        <TarjetaPersonaje   
                                            name ={personaje.name}
                                            index={index}
                                            personajeFavorito={true}
                                           
                                            
                         />
                    </div>
                )
            })}
        </div>
        </div>
    </div>
}

export default PaginaFavoritos