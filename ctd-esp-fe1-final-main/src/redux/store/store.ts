//import { configureStore } from "@reduxjs/toolkit";
import {createStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import estadoFiltro from '../reducer/reducerTarjetas';
//import { estadoFiltro } from "../reducer/reducerTarjetas";

//Mis Reducers 
const reducers = combineReducers({
    estadoFiltro: estadoFiltro
})


//Mi store
export const store = createStore(reducers);


//store.dispatch();
//store.subscribe(para ver en consola el state);




