//7d1f0e0afb5a3b0cd31cc8f89013abf5
var months = ["January", "February", "March"];
var svg = d3.select('#chart')
	.append('svg')
	.attr('width', 600)
	.attr('height', 200);
var colors = ["blue", "green", "lightgreen"];

var getMonth = function(mo) {
	
	return months.indexOf(mo) + 1;
};

var updateData = function() {
	var date = $('#year')[0].value + "-0" + getMonth($('#month')[0].value) + "-01";
	$.ajax({
		url: "http://apilayer.net/api/historical?access_key=7d1f0e0afb5a3b0cd31cc8f89013abf5&base=CNY&currencies=USD,CNY,EUR&date="+date,
		success: function(data) { 
			console.log(data);
			updateGraphic(data.quotes);
		},
		error: function() { console.log("error"); }
	});
};


var updateGraphic = function(quotes) {
	var data = [];
	for (var c in quotes) {
		data.push( quotes[c] );
	}
	console.log(data);

	d3.xml("cat.svg", "image/svg+xml", function(xml) {  
	var cat = document.importNode(xml.documentElement, true);
	svg.selectAll('g')
		.data(data)
		.enter().append('g')
		.each(function(){ 
			this.appendChild(cat.cloneNode(true)); 
		})
		.transition()
		.duration(1000)
		.attr('transform', function(d, i) { return 'translate(' + (d*100) + ',100)'; } )
		.attr("fill", function(d, i) { return colors[i % colors.length]})
		;
	});
};


var update = $('#update');
update.on('click', updateData);


