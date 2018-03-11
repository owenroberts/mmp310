var w = 600;
var h = 200;
var svg = d3.select('#chart')
	.append('svg')
	.attr('width', w)
	.attr('height', h);
var colors = ["blue", "green", "lightgreen"];
var minYear = 1950;
var maxYear = 2020;
var minRating = 0;
var maxRating = 5;

var mapVal = function(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

/* years */
for (var year = minYear; year < maxYear; year += 5) {
	svg.append("line")
		.attr({
			x1: mapVal(year, minYear, maxYear, 0, w),
			y1: 0,
			x2: mapVal(year, minYear, maxYear, 0, w),
			y2: h,
			stroke: "lightgray"
		});
	svg.append("text")
			.text(year)
			.attr({x: mapVal(year, minYear, maxYear, 0, w), y:h, fill:"lightgray", font:"Helvetica"})
		;
}

/* rating */
for (var rating = 0; rating < 5; rating++) {
	svg.append("line")
		.attr({
			x1: 0,
			y1: mapVal(rating, 0, 5, h, 0),
			x2: w,
			y2: mapVal(rating, 0, 5, h, 0),
			stroke: "lightgray"
		});
}

var title = svg.append("text")
	.attr({
		fill:"black",
		x: 10,
		y: 10
	})

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
	console.log(movies);
	var data = [];
	for (var movie in movies) {
		data.push({
			year: movies[movie].release_year,
			rating: movies[movie].rating,
			title: movies[movie].show_title
		});
	}

	var circles = svg.selectAll('circle')
		.data(data);

	circles.transition()	
		.attr('cx', function(d) {
			return mapVal(d.year, minYear, maxYear, 0, w); 
		})
		.attr('cy', function(d) {
			return mapVal(d.rating, 0, 5, h, 0); 
		})
		;

	circles.enter().append('circle')
		.on("mouseover", function(d) {
			title.text(d.title);
		})
		.attr("fill", function(d, i) { return colors[i % colors.length]})
		.attr({"cx": 0, "cy": h})
		.transition()
		.attr('cx', function(d) {
			return mapVal(d.year, minYear, maxYear, 0, w); 
		})
		.attr('cy', function(d) {
			return mapVal(d.rating, 0, 5, h, 0); 
		})
		.attr("r", 5)

		;

	circles.exit().remove();
};


var update = $('#update');
update.on('click', updateData);


