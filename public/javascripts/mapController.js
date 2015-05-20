mapular.controller('MapCtrl', ['uiGmapGoogleMapApi', '$geolocation', function(uiGmapGoogleMapApi, $geolocation){
  var viewModel = this;

  viewModel.myPosition = {
    coords: {
      latitude: 51.5173913,
      longitude: -0.0733216
    }
  }

  $geolocation.watchPosition({
    timeout: 60000,
    maximumAge: 250,
    enableHighAccuracy: true
  });

  viewModel.map = {
    center: {
      latitude: viewModel.myPosition.coords.latitude,
      longitude: viewModel.myPosition.coords.longitude
    },
    zoom: 16
  };
  
  viewModel.myPosition = $geolocation.position;
  
}])