import "./boton-favorito.css";
interface PropsBotonFavorito {
  esFavorito: boolean;
  onClick: () => void;
}

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 *@author Maite Lopez 
 *@param {boolean} esFavorito
 *@param {Function} onClick

 *@returns {JSX.Element}
 */
const BotonFavorito = ({
  esFavorito,
  onClick,
}: PropsBotonFavorito): JSX.Element => {
  const src: string = esFavorito
    ? "/imagenes/star-filled.png"
    : "/imagenes/star.png";

  return (
    <div
      className="boton-favorito"
      onClick={() => {
        onClick();
      }}
    >
      {esFavorito ? (
        <div>
          <img src={src} alt={"favorito"} />
        </div>
      ) : (
        <div>
          <img src={src} alt={"favorito"} />
        </div>
      )}
    </div>
  );
};

export default BotonFavorito;
