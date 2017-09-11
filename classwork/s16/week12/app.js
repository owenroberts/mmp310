var data = [280, 100, 150, 80, 140, 220, 250, 100];
var colors = ["blue", "lightblue", "green", "lightgreen"];

d3.select("#chart")
	.selectAll("div")
	.data(data)
	.enter().append("div")
	.style("background", function(d, i) {
		return colors[i % colors.length ];
	})
	.text( function(d) {
		return d;
	})
	.transition()
	.duration(2000)
	.style("width", function(d) {
		return d + "px";
	})
	;

var svg = d3.select("#newchart")
	.append("svg")
	.attr("width", 300)
	.attr("height", 200)
	;
svg.selectAll("circle")
	.data(data)
	.enter().append("circle")
	.attr("cx", 0)
	.attr("r", 10)
	.transition()
	.duration(2000)
	.attr("cx", function(d) {
		return d;
	})
	.attr("cy", 100)
	.attr("r", function(d) {
		return d / 10;
	})
	.attr("fill", function(d, i) {
		return colors[i % colors.length ];
	})
	;

d3.xml("cat.svg", "image/svg+xml", function(xml) {  
	var cat = document.importNode(xml.documentElement, true);
	svg.selectAll('g')
		.data(data)
		.enter().append('g')
		.each(function(){ 
			this.appendChild(cat.cloneNode(true)); 
		})
		.transition()
		.duration(2000)
		.attr("fill", function(d, i) {
			return colors[i % colors.length ];
		})
		.attr("transform", function(d) {
			  return "scale(" + d/1000 + ")";
		})

		;
});











