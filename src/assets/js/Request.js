class Request {
    constructor(url,method) {
        this.url = url
        this.method = method
    }
    get json() {
        let json = fetch(this.url)
            .then(response => response.json())

        return json 
    }
}

export default Request