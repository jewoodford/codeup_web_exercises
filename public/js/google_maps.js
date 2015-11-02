(function() {
    "use strict";
    // Include code from previous example

	// Set our address to geocode
	var address = "300 Alamo Plaza, San Antonio, TX, 78205";

	// Init geocoder object
	var geocoder = new google.maps.Geocoder();

	// Geocode our address
	geocoder.geocode({ "address": address }, function(results, status) {

	   // Check for a successful result
	   if (status == google.maps.GeocoderStatus.OK) {

	       // Recenter the map over the address
	       map.setCenter(results[0].geometry.location);
	   } else {

	       // Show an error message with the status if our request fails
	       alert("Geocoding was not successful - STATUS: " + status);
	   }
	});

    // Set our map options
    var mapOptions = {
        // Set the zoom level
        zoom: 18,

        // This sets the center of the map at our location
        center: {
            lat:  29.4284595,
            lng: -98.492433
        },
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };

    // Render the map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    // Create lat and long for our marker position
	var codeup = { lat: 29.428459, lng: -98.492433 };

	// Add the marker to our existing map
	var marker = new google.maps.Marker({
    position: codeup,
    map: map
	});
	
	// Create a new infoWindow object with content
	var infowindow = new google.maps.InfoWindow({
	    content: "Changing the world, one programmer at a time."
	});

	// Open the window using our map and marker
	infowindow.open(map, marker);
})();