import './tarjeta-episodio.css';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaEpisodio = (props) => {

    return <div className="tarjeta-episodio">
            <h4>{props.name}</h4>
            <div>
                <span>Temporada nro Episodio Nro</span>
                <span>URL del Episodio</span>
                <span>Fecha de Lanzamieto</span>
            </div>
    </div>
}

export default TarjetaEpisodio;