function initMap() {
	var bmccLocation = {
		lat: 40.718802437879894,
		lng: -74.01154518127441
	};
	
	var map = new google.maps.Map(
		document.getElementById('map'), 
		{
			center: bmccLocation,
			zoom: 10
		}
	);
	
	var marker = new google.maps.Marker({
		position: bmccLocation,
		title: "BMCC",
		map: map
	});
	
	marker.addListener('click', function() {
		console.log(marker);
		map.setZoom(15);
		map.setCenter(marker.getPosition());
	});
	
	map.addListener('click', function(event) {
		console.log(event.latLng.lat());
		console.log(event.latLng.lng());
		
		var marker = new google.maps.Marker({
			position: {
				lat: event.latLng.lat(),
				lng: event.latLng.lng()
			},
			title: "New Location",
			map: map
		});
	});
}
















