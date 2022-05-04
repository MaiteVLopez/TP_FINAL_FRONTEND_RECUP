import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import Favorito from "../../types/favorito";
import { IRootState } from "../store/store";

// typado
export interface MarcarFavoritoAction extends Action {
  type: "MARCAR_FAVORITO";
  marcado: boolean;
}

//accion para cuando la llamada asinc se ejecute con exito
export interface DesmarcarFavoritoAction extends Action {
  type: "DESMARCAR_FAVORITO";
  marcado: boolean;
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
  marcado: boolean
) => {
  return {
    type: "MARCAR_FAVORITO",
    marcado:marcado,
  };
};

export const desmarcarFavoritoAction: ActionCreator<DesmarcarFavoritoAction> = (
  actionMarcado: boolean
) => {
  return {
    type: "DESMARCAR_FAVORITO",
    marcado:actionMarcado,
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
  marcado: boolean
): FavoritosThunkAction => {
  return async (distpach, getState) => {
    try {
      if (marcado) {
        distpach(desmarcarFavoritoAction(false));
      } else {
        distpach(marcarFavoritosAction(true));
      }
      
    } catch (e) {
      distpach(marcarFavoritosError(e));
    }
  };
};
