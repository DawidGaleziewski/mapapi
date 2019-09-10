class Geocode {
    constructor(){
        this.apiKey= 'da21c3e928654522a51d5fb394fe9496';
        this.apiUrl = 'https://api.opencagedata.com/geocode/v1/json?q='
    }

    async reverseGeocode(longitude, latitude){
        const requestUrl = `${this.apiUrl}${latitude}+${longitude}&key=${this.apiKey}`;

        const response = await fetch(requestUrl);
        const responseDataPromise = await response.json()
        return responseDataPromise
    }
}

//Init for testing
// const geocode = new Geocode();
// console.log(geocode.reverseGeocode(21.027777, 52.180972))