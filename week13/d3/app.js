//7d1f0e0afb5a3b0cd31cc8f89013abf5


$.ajax({

	url: "http://apilayer.net/api/historical?access_key=7d1f0e0afb5a3b0cd31cc8f89013abf5&date=2000-03-31",
	success: function(data) { 
		console.log(data);
	},
	error: function() { console.log("error"); }
});


var data = [270, 100, 200, 150, 160, 80];
var colors = ["lightblue", "blue", "lightgreen", "green"];

var svg = d3.select('#chart')
	.append('svg')
	.attr('width', 800)
	.attr('height', 500);
d3.select("svg").selectAll("circle")
	.data(data)
	.enter().append("circle")
	.attr("cy", 100)
	.attr("r", 10 )
	.attr("cx", 0)
	.transition()
	.duration(2000)
	.attr("cx", function(d) { return d; })
	;

d3.xml("cat.svg", "image/svg+xml", function(xml) {  
	var cat = document.importNode(xml.documentElement, true);
	svg.selectAll('g')
		.data(data)
		.enter().append('g')
		.each(function(){ 
			this.appendChild(cat.cloneNode(true)); 
		})
		.attr('transform', function(d) { return 'translate(' + d + ',100)'; } )
		.transition()
		.duration(2000)
		.attr("fill", function(d, i) { return colors[i % colors.length]})
		;
});