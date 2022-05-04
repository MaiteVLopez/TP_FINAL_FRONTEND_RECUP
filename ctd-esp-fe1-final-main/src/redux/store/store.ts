//import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware} from '@reduxjs/toolkit';
import {combineReducers, createStore} from 'redux';
import { PersonajesAction } from '../actions/actionPersonajes';
//import { buscarPersonajes } from '../actions/actionPersonajes';
import estadoFiltro from '../reducer/reducerPersonajes';
import thunk from 'redux-thunk';
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
//devTools de redux:
import { composeWithDevTools } from 'redux-devtools-extension';
import episodiosPersonajes from '../reducer/reducerEpisodios';

//Mis Reducers 
const reducers = combineReducers({
    personajes: estadoFiltro,
    episodios: episodiosPersonajes
})

//Estado con el que va a trabajar el action thonk
export type IRootState = ReturnType<typeof reducers>;

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

//Mi store
//Configuro la Store para que soporte Thunk con applyMiddleware
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
//store.dispatch(buscarPersonajes);
//store.subscribe(para ver en consola el state);






