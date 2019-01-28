function initMap() {
	var bmcc = {
		lat: 40.718802437879894,
		lng: -74.01188850402832
	};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 5,
		center: bmcc
	});
	
	var marker = new google.maps.Marker({
		position: bmcc,
		map: map,
		title: "BMCC"
	});
	
	marker.addListener("click", function() {
		map.setZoom(15);
		map.setCenter(marker.getPosition());
	});
	
	map.addListener("click", function(event) {
		console.log(event);
		console.log(event.latLng.lat());
		console.log(event.latLng.lng());
	});
	
}








					   