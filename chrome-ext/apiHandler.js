class APIHandler {
    constructor() {
        this.PICTURE_BASE_URL = "https://www.metaweather.com";
        this.backgroundApp = axios.create({ baseURL: this.PICTURE_BASE_URL })

    }

    //did not work due to
    getWeather() {
        this.backgroundApp.get("/api/location/766273/")
            .then(response => console.log(response.data))
        return null
    }
}

