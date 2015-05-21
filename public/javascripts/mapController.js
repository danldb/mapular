mapular.controller('MapCtrl', ['uiGmapGoogleMapApi', '$geolocation', function(uiGmapGoogleMapApi, $geolocation){
  var viewModel = this;

  $geolocation.watchPosition({
    timeout: 60000,
    maximumAge: 250,
    enableHighAccuracy: true
  });

  viewModel.map = {
    zoom: 16
  };
  
  viewModel.myPosition = $geolocation.position;

}])