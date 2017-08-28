//https://www.dashingd3js.com/svg-basic-shapes-and-d3js
var w = 600;
var h = 200;
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var countries = [];
var svg = d3.select('#chart')
	.append('svg')
	.attr('width', 600)
	.attr('height', 250);
var colors = ["blue", "green", "lightgreen"];
var cat;
d3.xml("cat.svg", "image/svg+xml", function(xml) {  
	cat = document.importNode(xml.documentElement, true);
});
var getMonth = function(mo) {
	return months.indexOf(mo) + 1;
};

var mapVal = function(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

svg.append("line")	
	.attr({x1: 0, y1: 1, x2: w, y2: 1, stroke:"lightgray"});



var updateData = function() {
	var base = $('#base')[0].value;

	$.ajax({
		url: "http://api.fixer.io/latest?base="+base,
		success: function(data) {
			updateGraphic(data.rates);
		},
		error: function() { console.log("error"); }
	});
};


var updateGraphic = function(rates) {
	console.log(rates);
	var data = [];
	var min = 100, max = 0;
	for (var country in rates) {
		if (rates[country] < 100) {
			data.push({
				country: country,
				rate: rates[country]
			});
			if (rates[country] < min) min = rates[country];
			if (rates[country] > max) max = rates[country];
		}
		
	}

	console.log(min, max);

	var unit = mapVal(1, min, max, h, 0);
	svg.select("line")
		.transition()
		.duration(2000)
		.attr({x1: 0, y1: unit, x2: w, y2: unit, stroke:"lightgray"});


	svg.selectAll('g')
		.data(data)
		.enter().append('g')
		.each(function(){ 
			this.appendChild(cat.cloneNode(true)); 
		})
		.transition()
		.duration(1000)
		.attr('transform', function(d, i) {
			var mapped = mapVal(d.rate, min, max, 0, h);
			return 'translate(' + i * w/data.length + ', ' + (h - mapped) + ') scale(0.3)'; 
		} )
		.attr("fill", function(d, i) { return colors[i % colors.length]})
		;
	
};


var update = $('#update');
update.on('click', updateData);


