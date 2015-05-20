mapular.controller('MapCtrl', ['$scope', 'uiGmapGoogleMapApi', '$geolocation', function($scope, uiGmapGoogleMapApi, $geolocation){
  var viewModel = this;
  var updateMap = function() {
    viewModel.map = {
      center: {
        latitude: viewModel.myPosition.coords.latitude,
        longitude: viewModel.myPosition.coords.longitude
      },
      zoom: 16
    };
  };

  $geolocation.getCurrentPosition({
    timeout: 60000
  }).then(function(position) {
    viewModel.myPosition = position;
    updateMap();
    viewModel.myPosition = $geolocation.position;
  });
  
  $geolocation.watchPosition({
    timeout: 60000,
    maximumAge: 250,
    enableHighAccuracy: true
  });





}])