//import { configureStore } from "@reduxjs/toolkit";
import {createStore, applyMiddleware} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import { PersonajesAction } from '../actions/actionPersonajes';
//import { buscarPersonajes } from '../actions/actionPersonajes';
import estadoFiltro from '../reducer/reducerTarjetas';
import thunk from 'redux-thunk';
//devTools de redux:
import { composeWithDevTools } from 'redux-devtools-extension';
//import { estadoFiltro } from "../reducer/reducerTarjetas";

//Mis Reducers 
const reducers = combineReducers({
    estadoFiltro: estadoFiltro,
    //otroREducer
})


//Mi store
//Configuro la Store para que soporte Thunk con applyMiddleware
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
//store.dispatch(buscarPersonajes);
//store.subscribe(para ver en consola el state);






