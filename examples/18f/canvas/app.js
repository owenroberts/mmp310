var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var data;
var url = "https://api.worldbank.org/v2/countries/usa/indicators/SP.POP.TOTL?format=jsonp&prefix=?"

// check for canvas support
if (ctx) {
	
	$.getJSON(url, function(json) {
		data = json[1];
		console.log(data);
		
		// waiting for data to draw graphics
		setInterval(draw, 1000 / 24);
	});
}

var x = 0;

function draw() {
	
	// background
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, 600, 1000);
	
	// rect fill
	ctx.fillStyle = '#3311dd';
	ctx.fillRect(x, 100, 100, 50);
	
	x += 5;
	
	// rect stroke
	ctx.lineWidth = 10;
	ctx.strokeStyle = "hotpink";
	ctx.strokeRect(100, 100, 100, 50);
	
	ctx.miterLimit = 1;
	ctx.lineWidth = 5;
	ctx.font = "2em Comic Sans MS";
	ctx.strokeText("MMP 310", 200, 200);
	ctx.fillText("MMP 310", 200, 200);
	
	
	// mapping us population data
	ctx.font = "1em monaco";
	var dataY = 0;
	for (var i = 0; i < data.length; i++) {
		var year = data[i].date;
		var population = data[i].value / 1000000;
		
		ctx.fillStyle = "blue";
		ctx.fillRect(0, dataY, population, 20);
		
		dataY += 20;
		
		ctx.fillStyle = "white";
		ctx.fillText(year, 0, dataY);
	
		
		
	}
	
}











