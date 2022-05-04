import { FC } from "react";
/**
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