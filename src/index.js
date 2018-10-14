import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import JsonFetcher from './fetcher';
import './assets/main.css';
import { BrowserRouter } from 'react-router-dom';


const config = require("./config");

window.app_config = config;
window.fetcher = new JsonFetcher(config.BACK_HOST);

ReactDOM.render(

    <BrowserRouter>
        <App />
    </BrowserRouter>,

    document.getElementById('root')
);
