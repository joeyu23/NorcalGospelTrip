function initMap() {
  var facebook = {lat: 37.45, lng: -122.18};
  var goog = {lat: 37.39, lng: -122.08};
  var amazon = {lat: 37.47, lng: -122.14};
  var apple = {lat: 37.33182, lng: -122.03118};
  var broadcom = {lat: 37.279518, lng: -121.867905};
  var cisco = {lat: 37.432335, lng: -121.899574};
  var huawei = {lat: 37.354107, lng: -121.955238};
  var marvell = {lat: 37.411941, lng: -121.982022};
  var nvidia = {lat: 37.370377, lng: -121.964187};
  var sandisk = {lat: 37.419121, lng: -121.922126};
  var vmware = {lat: 37.402537, lng: -122.144708};
  var amd = {lat: 37.383188, lng: -121.970247};
  var walmart = {lat: 37.382248, lng: -122.035720};

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
  });
  var amazonMarker = new google.maps.Marker({
  	position: amazon,
    map: map
  });
  var appleMarker = new google.maps.Marker({
  	position: apple,
    map: map
  });
  var broadcomMarker = new google.maps.Marker({
  	position: broadcom,
    map: map
  });
  var ciscoMarker = new google.maps.Marker({
  	position: cisco,
    map: map
  });
  var huaweiMarker = new google.maps.Marker({
  	position: huawei,
    map: map
  });
  var nvidiaMarker = new google.maps.Marker({
  	position: nvidia,
    map: map
  });
  var sandiskMarker = new google.maps.Marker({
  	position: sandisk,
    map: map
  });
  var vmwareMarker = new google.maps.Marker({
  	position: vmware,
    map: map
  });
  var amdMarker = new google.maps.Marker({
  	position: amd,
    map: map
  });
  var walmartMarker = new google.maps.Marker({
  	position: walmart,
    map: map
  });

}
