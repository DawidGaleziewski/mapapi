class Weather{
    constructor(){
        this.apiKey = 'e7336c281c3b4f9e7da03a467444db14'
        this.url = 'https://api.openweathermap.org/data/2.5/'
    }

    //Cannot be float
    async getWeather(longitude, latitude){

        const requestURL = `${this.url}weather?lat=${latitude}&lon=${longitude}&APPID=${this.apiKey}`;

        const response = await fetch(requestURL);
        const responseData = await response.json()

        return responseData
    }

    async forecastWeather(longitude, latitude) {
        const requestURL = `${this.url}forecast?lat=${latitude}&lon=${longitude}&APPID=${this.apiKey}`;

        const response = await fetch(requestURL);
        const responseData = await response.json()

        return responseData
    }
}

//Test object
// const weather = new Weather();
// console.log(weather.getWeather('35.111', '15.1'))