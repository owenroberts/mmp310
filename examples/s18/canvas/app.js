var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

if (ctx) {
	// setInterval(draw, 1000 / 60);
}

var x = 100;

function draw() {
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, 600, 400);
	
	ctx.fillStyle = "green";
	ctx.fillRect(x, 100, 50, 50);
	x += 1;
	
	ctx.fillStyle = "blue";
	ctx.fillRect(400, 100, 50, 100);
	ctx.font = "40px Comic Sans MS";
	ctx.fillText("Hello world", 10, x);
}

var url = 'https://api.worldbank.org/v2/countries/usa/indicators/SP.POP.TOTL?per_page=100 &format=jsonp&prefix=?';
$.getJSON(url, function(data) {
	console.log(data);
	var x = 5;
	var y = 5;
	for (let i = 0; i < data[1].length; i++) {
		var year = data[1][i].date;
		var population = data[1][i].value / 10000000;
		if (ctx && population) {
			
			ctx.fillStyle = "green";
			ctx.fillRect(x, y, 35, population * 2);
			
			ctx.font = "14px Arial";
			ctx.fillStyle = "white";
			ctx.fillText( Math.floor(population * 10), x + 2, y + 12);
			
			ctx.fillStyle = "black";
			ctx.fillText(year, x + 2, y + 25);
			
			x += 40;
			if (x > 600) {
				y += 100;
				x = 5;
			}
			
		}
		
	}
});










