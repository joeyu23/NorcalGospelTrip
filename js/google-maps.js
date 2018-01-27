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
    zoom: 11,
    center: walmart
  });

  var fbMarker = new google.maps.Marker({
    position: facebook,
    icon: 'images/logo/facebook.png',
    map: map
  });
  var googMarker = new google.maps.Marker({
  	position: goog,
    icon: 'images/logo/google.png',
    map: map
  });
  var amazonMarker = new google.maps.Marker({
  	position: amazon,
    icon: 'images/logo/amazon.png',
    map: map
  });
  var appleMarker = new google.maps.Marker({
  	position: apple,
    icon: 'images/logo/apple.png',
    map: map
  });
  var broadcomMarker = new google.maps.Marker({
  	position: broadcom,
    icon: 'images/logo/broadcom.png',
    map: map
  });
  var ciscoMarker = new google.maps.Marker({
  	position: cisco,
    icon: 'images/logo/cisco.png',
    map: map
  });
  var huaweiMarker = new google.maps.Marker({
  	position: huawei,
    icon: 'images/logo/huawei.png',
    map: map
  });
  var nvidiaMarker = new google.maps.Marker({
  	position: nvidia,
    icon: 'images/logo/nvidia.png',
    map: map
  });
  var sandiskMarker = new google.maps.Marker({
  	position: sandisk,
    icon: 'images/logo/sandisk.png',
    map: map
  });
  var vmwareMarker = new google.maps.Marker({
  	position: vmware,
    icon: 'images/logo/vmware.png',
    map: map
  });
  var amdMarker = new google.maps.Marker({
  	position: amd,
    icon: 'images/logo/amd.png',
    map: map
  });
  var walmartMarker = new google.maps.Marker({
  	position: walmart,
    icon: 'images/logo/walmart.png',
    map: map
  });

}
