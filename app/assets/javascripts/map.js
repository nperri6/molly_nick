// Google Maps setup

$(document).ready(function() {
  function initialize() {

    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(42.196977, -88.254036),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    // var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var weddingPosition = new google.maps.LatLng(42.199109, -88.249299);
    var marker = new google.maps.Marker({
      position: weddingPosition,
      map: map,
      icon:'assets/ring2.png'
    });

    var receptionPosition = new google.maps.LatLng(42.192015, -88.251911);
    var marker = new google.maps.Marker({
      position: receptionPosition,
      map: map,
      icon: 'assets/glasses.png'
    });
  };

  initialize();


  $('#wedding-directions').on("click", function(){
    window.open('https://www.google.com/maps/dir/Current+Location/33+Little+Marryat+Road,+Trout+Valley,+IL');
    return false;
  });
});

