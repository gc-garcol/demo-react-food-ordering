import React from 'react';
import ReactDOM from 'react-dom';
import store from "store/store"
import { Provider } from 'react-redux';
import App from './App';
import "./index.scss"
import 'swiper/swiper.scss';
import "swiper/swiper-bundle.min.css";

const reduxApp = (
  <Provider store={ store } >
    <App/>
  </Provider>
);

ReactDOM.render(
  reduxApp,
  document.getElementById('root')
);