class UI {
    constructor(){
        this.cardContainer = document.getElementById('weather-card-container');
    }

    paintWeatherCard(data){
        const cardTemplate = `
        <div class="card mb-4 box-shadow">
          <div class="card-header">
              <img class ="header__image" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
              <h4 class ="header__text">Currently in ${data.name}</h4>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Country: ${data.sys.country}</li>
              <li class="list-group-item">City: ${data.name}</li>
              <li class="list-group-item">Temperature: ${(data.main.temp - 273.15).toFixed(1)} C</li>
              <li class="list-group-item">Lon/Lat: ${data.coord.lon}/${data.coord.lat}</li>
              <li class="list-group-item">Pressure: ${data.main.pressure}</li>
              <li class="list-group-item">Description: ${data.weather[0].description}</li>
            </ul>
          </div>
        `;

        this.cardContainer.innerHTML = cardTemplate;
    }

    paintForecastCards(data, numberOfCards){

        let cardsTemplate = '';

        for(let i = 0; i < numberOfCards; i++){
            console.log(i)
            const cardTemplate = `
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                  <h4 class ="header__text">Forecast for ${data.list[i].dt_txt}</h4>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Temperature: ${(data.list[i].main.temp - 273.15).toFixed(1)} C</li>
      
                  <li class="list-group-item">Description: ${data.list[i].weather[0].description}</li>
                </ul>
              </div>
            </div>
            `;

            cardsTemplate += cardTemplate
        }



        this.cardContainer.innerHTML += cardsTemplate;
    }
}

//Test class object
// const ui = new UI();
// ui.paintWeatherCard('test')