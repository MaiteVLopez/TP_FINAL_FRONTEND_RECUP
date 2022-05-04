import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useSelector } from "../redux/store/store"
import { useNavigate } from "react-router-dom";
import Episodio from "../types/episodio";
import { EstadoPersonaje } from "../redux/reducer/reducerPersonajes";
import { EpisodiosBuscados } from "../redux/reducer/reducerEpisodios";
import { FC } from "react";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el episodio seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */

const PaginaDetalle : FC = () => {
    const navigate = useNavigate();
    const {arrayEpisodios, episodio} = useSelector<EpisodiosBuscados>((state):any => state.episodios)
    const {arrayPersonajes,estado, busqueda, error} = useSelector<EstadoPersonaje>(state => state.personajes)
    const index : string | null = localStorage.getItem('index');
    let indexInt : number = -1;
    if(index)
    {
        indexInt = parseInt(index);
    }
    console.log("episodio detalle", episodio)
    /*
    if(arrayEpisodios.length > 0)
        {
        //si el array tiene un objeto
        const tarjetaEpisodio : Episodio = arrayEpisodios[0]; 
       
        }*/
       
        
    return <div className="container">
        <h3>{arrayPersonajes[indexInt].name}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={arrayPersonajes[indexInt].image} alt={arrayPersonajes[indexInt].name}/>
                <div className={"detalle-header-texto"}>
                    <p>{arrayPersonajes[indexInt].name}</p>
                    <p>Planeta: {arrayPersonajes[indexInt].location.name}</p>
                    <p>Genero: {arrayPersonajes[indexInt].gender}</p>
                </div> 
            </div>
        </div>
        <h4>Lista de episodios donde apareció el episodio</h4>
        <div className={"episodios-grilla"}>
        {arrayPersonajes[indexInt].episode.length>1?arrayEpisodios.map((episodio:Episodio) => 
                {
                    return ( <div key={"episodio" + episodio.id}>
                        <TarjetaEpisodio   nombre={episodio.name}
                                           episodio ={episodio.episode}
                                           url={episodio.url}
                                           lanzamiento={episodio.created}
                                            
                         />
                    </div>)
                }):<div >
                
                        <TarjetaEpisodio   nombre={episodio.name}
                                           episodio ={episodio.episode}
                                           url={episodio.url}
                                           lanzamiento={episodio.created}
                                            
                         />
              
                </div>}

        </div>
    </div>
}

export default PaginaDetalle

/**
 * <BotonFavorito esFavorito={false} />
 


 
         
  


*/