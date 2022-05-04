import './tarjeta-episodio.css';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaEpisodio = (props:any) => {
    return <div className="tarjeta-episodio">
            <h4>{props.nombre}</h4>
            <div>
                <span>{props.episodio}</span>
                <span>{props.url}</span>
                <span>{props.lanzamiento}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;