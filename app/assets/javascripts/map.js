// Google Maps setup

$(document).ready(function() {
  function initialize() {

    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(42.211012, -88.261996),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    // var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var wedding = 'assets/glyph-ring.png';
    var weddingPosition = new google.maps.LatLng(42.199109, -88.249299);
    var marker = new google.maps.Marker({
      position: weddingPosition,
      map: map,
      icon: wedding
    });

    var receptionPosition = new google.maps.LatLng(42.192015, -88.251911);
    var marker = new google.maps.Marker({
      position: receptionPosition,
      map: map,
      icon: 'assets/glyph-glass.png'
    });

    var hotelPosition = new google.maps.LatLng(42.220275, -88.284814);
    var marker = new google.maps.Marker({
      position: hotelPosition,
      map: map,
      icon: 'assets/glyph-home.png'
    });
  };

  initialize();


  $('#wedding-directions').on("click", function(){
    window.open('https://www.google.com/maps/dir/Current+Location/33+Little+Marryat+Road,+Trout+Valley,+IL');
    return false;
  });

  $('#hotel-directions').on("click", function(){
    window.open('https://www.google.com/maps/dir/Current+Location/Holiday+Inn+Crystal+Lake,+800+S+Illinois+Rte+31,+Crystal+Lake,+IL+60014,+United+States/');
    return false;
  });

  $('#reception-directions').on("click", function(){
    window.open('https://www.google.com/maps/dir/Current+Location/Trout+Valley+Park,+Trout+Valley,+IL+60013/@42.193023,-88.2527316,17z/');
    return false;
  });

});

