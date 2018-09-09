import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import JsonFetcher from './fetcher';
import './assets/main.css'

window.fetcher = new JsonFetcher('http://127.0.0.1:5000/');

ReactDOM.render(<App />, document.getElementById('root'));
