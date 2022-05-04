import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import Favorito from "../../types/favorito";
import Personaje from "../../types/personaje";
import { IRootState } from "../store/store";

// typado
export interface MarcarFavoritoAction extends Action {
  type: "MARCAR_FAVORITO";
  marcado: boolean;
  arrayFavoritos: Personaje[]
}

//accion para cuando la llamada asinc se ejecute con exito
export interface DesmarcarFavoritoAction extends Action {
  type: "DESMARCAR_FAVORITO";
  marcado: boolean;
  arrayFavoritos: Personaje[]
}

//accion para cuando la llamada asinc se ejecute con error
export interface MarcarFavoritoErrorAccion extends Action {
  type: "MARCAR_DESMARCAR_ERROR";
  error: string;
}

export type FavoritosAction =
  | MarcarFavoritoAction
  | DesmarcarFavoritoAction
  | MarcarFavoritoErrorAccion;
interface FavoritosThunkAction
  extends ThunkAction<void, IRootState, unknown, FavoritosAction> {}

export const marcarFavoritosAction: ActionCreator<MarcarFavoritoAction> = (
  marcado: boolean, arrayFavoritos: Personaje[]
) => {
  return {
    type: "MARCAR_FAVORITO",
    marcado:marcado,
    arrayFavoritos: arrayFavoritos
  };
};

export const desmarcarFavoritoAction: ActionCreator<DesmarcarFavoritoAction> = (
  actionMarcado: boolean, arrayFavoritos: Personaje[]
) => {
  return {
    type: "DESMARCAR_FAVORITO",
    marcado:actionMarcado,
    arrayFavoritos: arrayFavoritos
  };
};

export const marcarFavoritosError: ActionCreator<MarcarFavoritoErrorAccion> = (
  error: string
) => {
  return {
    type: "MARCAR_DESMARCAR_ERROR",
    error: error,
  };
};

export const marcarFavoritosThunkAction = (
  id: number,
  marcado: boolean,
  arrayFavoritos: Personaje[]
): FavoritosThunkAction => {
  return async (distpach, getState) => {
    try {
      if (marcado) {
        arrayFavoritos.splice(0,id)
        distpach(desmarcarFavoritoAction(false,arrayFavoritos));
      } else {
        
        distpach(marcarFavoritosAction(true,arrayFavoritos));
      }
      
    } catch (e) {
      distpach(marcarFavoritosError(e));
    }
  };
};
