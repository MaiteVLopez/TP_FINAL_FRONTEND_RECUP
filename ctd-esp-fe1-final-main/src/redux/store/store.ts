//import { configureStore } from "@reduxjs/toolkit";
import {createStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import { buscarPersonajes } from '../actions/action';
import estadoFiltro from '../reducer/reducerTarjetas';
//import { estadoFiltro } from "../reducer/reducerTarjetas";

//Mis Reducers 
const reducers = combineReducers({
    estadoFiltro: estadoFiltro,
    //otroREducer
})


//Mi store
export const store = createStore(reducers);
//store.dispatch(buscarPersonajes);
//store.subscribe(para ver en consola el state);




