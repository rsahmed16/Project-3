function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { 41.8349° N, 87.6270° W},
    zoom: 12,
	zoomControl: false,
    scaleControl: true,
	mapTypeId: 'hybrid'
  });
  
  var marker = new google.maps.Marker({
    position: { 41.8349° N, 87.6270° W},
    map: map,
  });
  
  var infowindow = new google.maps.InfoWindow({
    content:"That's my University"
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;