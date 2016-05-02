//https://www.dashingd3js.com/svg-basic-shapes-and-d3js
var w = 600;
var h = 200;
var svg = d3.select('#chart')
	.append('svg')
	.attr('width', 600)
	.attr('height', 200);
var colors = ["blue", "green", "lightgreen"];



var mapVal = function(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}


var updateData = function() {
	var dir = $('#director')[0].value;
	$.ajax({
		url: "http://netflixroulette.net/api/api.php?director="+dir,
		success: function(movies) {
			updateGraphic(movies);
		},
		error: function() { console.log("error"); }
	});
};

var updateGraphic = function(movies) {
	var data = [];
	var min = 2020, max = 0;
	for (var movie in movies) {
		data.push({
			year: movies[movie].release_year,
			rating: movies[movie].rating
		});
		if (movies[movie].release_year < min) min = movies[movie].release_year;
		if (movies[movie].release_year > max) max = movies[movie].release_year;
	}

	console.log(min, max);

		svg.selectAll('circle')
			.data(data)
			.enter().append('circle')
			.attr("fill", function(d, i) { return colors[i % colors.length]})
			.transition()
			.duration(1000)
			.attr('cx', function(d, i) {
				var mappedYear = mapVal(d.year, min, max, 0, w - 20);
				return mappedYear ; 
			} )
			.attr('cy', function(d, i) {
				var mappedRating = mapVal(d.rating, 0, 5, h, 0);
				return mappedRating ; 
			} )
			
			.attr("r", 20)

			;

};


var update = $('#update');
update.on('click', updateData);


