//Creates a instance off Open Layers Map object
var map = new ol.Map({
    //Target must be id of the div
    target: 'map',
    //Layers used (only this is available at the moment)
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    //View allows to specify the center, resolution and rotation of the map
    view: new ol.View({
      center: ol.proj.fromLonLat([21.027777, 52.180972]),
      zoom: 6
    })
  });


  //Getting city information via reverse geocoding
  map.addEventListener('click',  (e) => {
      //Init geocode object
      const geocode = new Geocode();

      //Get lon/lat for cliecked object
      let lonlat  = ol.proj.toLonLat(e.coordinate);
      lonlat = ol.proj.transform(e.coordinate, 'EPSG:3857', 'EPSG:4326')

      console.log(lonlat[0], lonlat[1])


      //Get the name of the Country, County, City
      geocode.reverseGeocode(lonlat[0], lonlat[1])
        .then(reverseGeocodeData=> {
            console.log(reverseGeocodeData.results[0].components.city, reverseGeocodeData.results[0].components.country)
        })
        .catch(err => console.log(err))
  })

//https://api.opencagedata.com/geocode/v1/json?q=2338361.5693001114+6856095.689067169&key=da21c3e928654522a51d5fb394fe9496


