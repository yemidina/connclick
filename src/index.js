import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import {Provider} from "react-redux"
import store from "./Store";
import {positions,transitions,Provider as AlertProvider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeOut:5000,
  position:positions.BOTTOM_CENTER,
  transitions:transitions.SCALE,
}

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
    <App />
    </AlertProvider>
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
