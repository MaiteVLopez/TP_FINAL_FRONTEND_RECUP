import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useSelector } from "../redux/store/store"
import { EstadoPersonaje } from '../redux/reducer/reducerTarjetas';
import { useNavigate } from "react-router-dom";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
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

const PaginaDetalle = () => {
    const navigate = useNavigate();
    const {arrayPersonajes,estado, busqueda, error} = useSelector<EstadoPersonaje>(state => state.personajes)
    //const index : number = parseInt(localStorage.getItem('index'));
    const index : string | null = localStorage.getItem('index');
    let indexInt : number = -1;
    if(index)
    {
        indexInt = parseInt(index);
    }
    console.log("arrayEpisode",arrayPersonajes[indexInt].episode)
    const episodios: string[] = arrayPersonajes[indexInt].episode;
    let arrayEpisodios : string[] = []
    const strParaCortar = 'https://rickandmortyapi.com/api/episode/';
    episodios?.map((episodio:string) => arrayEpisodios.push(episodio.substr(strParaCortar.length)))
    
    console.log("str",arrayEpisodios)
    return <div className="container">
        <h3>arrayPersonajes[indexInt].name</h3>
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
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            <TarjetaEpisodio />
            <TarjetaEpisodio />
            <TarjetaEpisodio />
        </div>
    </div>
}

export default PaginaDetalle

/**
 * <BotonFavorito esFavorito={false} />
 */