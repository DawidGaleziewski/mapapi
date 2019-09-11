 //Get the information regarding point on map
map.addEventListener('click',  (e) => {
    //Init class objects
    const weather = new Weather();
    const ui = new UI();

    //Get lon/lat for cliecked object
    let lonlat  = ol.proj.toLonLat(e.coordinate);
    lonlat = ol.proj.transform(e.coordinate, 'EPSG:3857', 'EPSG:4326')




    //Get weather for this lon/lat
    weather.getWeather(lonlat[0], lonlat[1])
      .then(weatherData => {
          console.log(weatherData)
          ui.paintWeatherCard(weatherData)
      })

   //Get weather forecast
   weather.forecastWeather(lonlat[0], lonlat[1])
      .then(forecastData => {
          console.log(forecastData);
          ui.paintForecastCards(forecastData, 2);
      })

})

//https://api.opencagedata.com/geocode/v1/json?q=2338361.5693001114+6856095.689067169&key=da21c3e928654522a51d5fb394fe9496