mapular.controller('MapCtrl', ['uiGmapGoogleMapApi', '$geolocation', function(uiGmapGoogleMapApi, $geolocation){
  var vm = this;
  
  $geolocation.getCurrentPosition({
      timeout: 60000
   }).then(function(position) {
      vm.myPosition = position;
      vm.map = { center: { latitude: vm.myPosition.coords.latitude, longitude: vm.myPosition.coords.longitude }, zoom: 8 };
   });
}])