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

 


