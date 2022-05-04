import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
        <App />
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
