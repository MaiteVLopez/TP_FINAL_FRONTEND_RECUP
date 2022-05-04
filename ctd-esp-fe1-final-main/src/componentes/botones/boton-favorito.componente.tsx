import { useEffect } from 'react';
import './boton-favorito.css';
import { FavoritoMarcado } from "../../redux/reducer/reducerFavoritos";
import { useSelector } from "../../redux/store/store";
import {  marcarFavoritosThunkAction } from "../../redux/actions/actionFavoritos";
import { useDispatch } from "react-redux";
interface PropsBotonFavorito
{
    esFavorito: boolean,
    onClick: () => void
}

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 *@author Maite Lopez 
 *@param {boolean} esFavorito
 *@param {Function} onClick

 *@returns {JSX.Element}
 */
const BotonFavorito  = ({esFavorito, onClick}: PropsBotonFavorito) :JSX.Element => {
    //let src:string = "/imagenes/star-filled.png";//esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"
    
    const {marcado,estadoFavorito,errorFavorito} = useSelector<FavoritoMarcado>(state => state.favoritos);
    esFavorito = marcado
    let src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"
    const dispatch = useDispatch();
    const handleClick = () => { 
       /* 
        dispatch(marcarFavoritosThunkAction(1,esFavorito))
        console.log("fav boton desp del dispach",esFavorito,src)
      };
      if(esFavorito)
      {
        console.log("fav boton en el if, true",esFavorito,src)
          esFavorito = false;
          src = "/imagenes/star.png"
      }
        else 
        {
            console.log("fav boton en el if, false",esFavorito,src)
            esFavorito = true;
            src = "/imagenes/star-filled.png"
        } 
        console.log("fav boton desp del if",esFavorito,src)
        */
       if(esFavorito)
        {
            
            esFavorito = false
           //src = "/imagenes/star.png"
           dispatch(marcarFavoritosThunkAction(1,esFavorito))
       
        }
    else{
        
        esFavorito = true
        //src = "/imagenes/star-filled.png"
        dispatch(marcarFavoritosThunkAction(3,esFavorito))
        
       
    }
}



    return <div className="boton-favorito" onClick={() => {onClick()}}>
        
        {
          esFavorito?
          
            <div>
        <img src={src} alt={"favorito"}/>

            </div>
          :
          <div>
<img src={src} alt={"favorito"}/>

        </div>
        }




    </div>
}

export default BotonFavorito;