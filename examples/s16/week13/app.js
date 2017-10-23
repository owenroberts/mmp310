/* setup chart */
var width = 600;
var height = 200;
var minYear = 1970;
var maxYear = 2016;
var minRating = 0;
var maxRating = 5;

var mapVal = function(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
};

var svg = d3.select("#chart")
	.append("svg")
	.attr({
		"width": width,
		"height": height
	});



/* year */
for (var year = minYear; year < maxYear; year += 5) {
	svg.append("line")
		.attr({
			x1: mapVal(year, minYear, maxYear, 0, width),
			y1: 0,
			x2: mapVal(year, minYear, maxYear, 0, width),
			y2: height,
			stroke: "lightgray"
		});
	svg.append("text")
		.text(year)
		.attr({
			x: mapVal(year, minYear, maxYear, 0, width),
			y: height,
			fill: "lightgray"
		});
}

/* rating */
for (var rating = minRating; rating < maxRating; rating++){
	svg.append("line")
		.attr({
			x1: 0,
			y1: mapVal(rating, minRating, maxRating, height, 0),
			x2: width,
			y2: mapVal(rating, minRating, maxRating, height, 0),
			stroke: "lightgray"
		});
}

var title = svg.append("text")
	.attr({
		x: 10,
		y: 10,
		fill: "black",
		textSize: 24
	});

/* query the api for data */
var updateData = function() {
	var actor = $('#actor')[0].value;
	$.ajax({
		url: "http://netflixroulette.net/api/api.php?actor=" + actor,
		success: function(movies) {
			graphData(movies);
		},
		error: function(error) {
			console.log(error);	
		}
	});
};
$('#submit').on('click', updateData);

/* map data */
var graphData = function(movies) {
	var circles = svg.selectAll("circle")
		.data(movies)
	
	circles.transition()
		.attr("cx", function(d) {
			return mapVal(d.release_year, minYear, maxYear, 0, width);
		})
		.attr("cy", function(d) {
			return mapVal(d.rating, minRating, maxRating, height, 0);
		})
		;
	
	circles.enter().append("circle")
		.on("mouseover", function(d) {
			title.text(d.show_title);
		})
		.attr("cx", function(d) {
			return mapVal(d.release_year, minYear, maxYear, 0, width);
		})
		.attr("cy", function(d) {
			return mapVal(d.rating, minRating, maxRating, height, 0);
		})
		.attr({
			"r": 6,
			"fill": "blue"
		})
		;
	
	circles.exit().remove();
}