function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 14.675796515578558, lng: 77.59489702704062},,
    zoom: 12,
	zoomControl: false,
    scaleControl: true,
	mapTypeId: 'hybrid'
  });
  
  var marker = new google.maps.Marker({
    position: { lat: 14.675796515578558, lng: 77.59489702704062},,
    map: map,
  });
  
  var infowindow = new google.maps.InfoWindow({
    content:"That's my University"
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;
