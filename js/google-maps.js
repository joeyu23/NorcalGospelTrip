function initMap() {
  var facebook = {lat: 37.45, lng: -122.18};
  var goog = {lat: 37.39, lng: -122.08};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: facebook
  });
  var fbMarker = new google.maps.Marker({
    position: facebook,
    map: map
  });
  var googMarker = new google.maps.Marker({
  	position: goog,
    map: map
  })
}
