import React from "react";
import ReactDOM  from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import {createStore, combineReducers} from 'redux';
import { estadoFiltro } from "../reducer/reducerTarjetas";
import { action } from "../actions/action";

//Mis Reducers 
const reducers = combineReducers({
    estadoFiltro: estadoFiltro
})


//Mi store
export const store = createStore(reducers);


//store.dispatch();
//store.subscribe(para ver en consola el state);




