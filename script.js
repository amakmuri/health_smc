//load ARC GIS map

require([
      "esri/views/MapView",
      "esri/WebMap",
      "esri/geometry/Point",
      "esri/layers/FeatureLayer",
        "esri/renderers/SimpleRenderer",
        "esri/symbols/SimpleMarkerSymbol",
        "esri/symbols/SimpleLineSymbol",
        "esri/symbols/SimpleFillSymbol",
        "esri/widgets/Legend",
        "esri/geometry/Point",
        "esri/geometry/Multipoint",
        "dojo/domReady!"
    ], function(
      MapView, WebMap, FeatureLayer, SimpleRenderer, Search, 
      SimpleMarkerSymbol, SimpleLineSymbol, SimpleFillSymbol, Legend, Point,
      Multipoint, SpatialReference
    ) {
      var webmap = new WebMap({
        portalItem: {
          id: "bfdc4965cae64fe4904be5e4113c4bb2"
        }
      });

      var view = new MapView({
        map: webmap,
        container: "map",
        zoom: 11,
        center: [-122.213223, 37.477421]
      });
    }
    )
      //end of ESRI function


$.getJSON('https://data.smcgov.org/resource/kmat-kj43.json', function(mobile_Clinic) {
    console.log(mobile_Clinic)
    for (var i = 0; i < mobile_Clinic.length; i++) {
      $('#mc_locations').append(mobile_Clinic[i].city + '\n')
      $('#mc_locations').append(mobile_Clinic[i].location + '\n')
      $('#mc_locations').append(mobile_Clinic[i].address + '\n')

        
    }
    
  })
