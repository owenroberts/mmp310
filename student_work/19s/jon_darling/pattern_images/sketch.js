/*jon Darling
week-5
MMP-310
grid/image
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);

  var columns = 9;
  var rows = 7;
  var w = width / columns;
  var h = height / rows;
  //    var cap = 'hello';

  for (let x = 0; x <= width; x += w) {
    for (let y = 0; y <= height; y += h) {
      discs(x - w, y - h, w, h); //discs

      var rd = random(3);
      if (rd > 2) {
        stroke(0);
        strokeWeight(1.6);
        line(x + w, y, x + w, y + h);
      } else if (rd > 1) {
        var r = random(0, 255);
        var g = random(0, 100);
        var b = random(0, 255);

        stroke(r, g, b);
        strokeWeight(2);
        line(x + w, y, x, y + h);
      } else {
        stroke(0);
        strokeWeight(1);
        line(x, y, x + w, y + h);
        discs(x - w, y - h, w, h); //discs
        noStroke();

        rect(x - w, y - h, w / 4, h / 4, 10); // blocks
      }
    }
  }
}

function discs(x, y, w, h) {
  var r = random(0, 255);
  var g = random(0, 100);
  var b = random(0, 255);
  fill(r, g, b);
  noStroke();
  ellipse(x, y, w / 6);//main disc
  stroke(255);
  strokeWeight(2);
  ellipse(x, y, 7, 3 + random(5));//inner disc
}

// click to save image to Downloads folder
function mouseClicked() {
	save('pattern-1.jpg');
}
