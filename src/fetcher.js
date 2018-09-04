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

export default JsonFetcher
