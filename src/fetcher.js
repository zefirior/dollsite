class JsonFetcher {

    constructor(url) {
        this.server_url = url;
    }

    wrapUrl(url) {
        return this.server_url + url
    }

    getJsonPromise(url) {
        return fetch(
            this.wrapUrl(url),
            {method: 'POST'}
        ).then(response => {
            return response.json()
        })
    }
}

export default JsonFetcher
