import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

class JsonFetcher {

    constructor(url) {
        this.server_url = url;
    }

    getJsonPromise(url) {
        return fetch(
            this.server_url + url
        ).then(response => {
            return response.json()
        })
    }
}

window.fetcher = new JsonFetcher('http://127.0.0.1:5000/');

ReactDOM.render(<App />, document.getElementById('root'));
