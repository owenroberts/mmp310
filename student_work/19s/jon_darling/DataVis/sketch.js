/*
	jon darling
    MMP-310
    wekk-8
    DataVis v-1
    
 */

var Epl; //english premier league soccer

function preload() {
  Epl = loadTable("epl_final.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(LEFT, CENTER);
  textSize(30);
  noStroke();
}

function draw() {
  background("#888");
  for (let i = 0; i < Epl.getRowCount(); i++) {
    let salePrice = Epl.getNum(i, "market_value/mil's");
    let age = Epl.getNum(i, "age");
    let x = i * 9;
    let y = map(salePrice, 0, 65, 0, height);
    let w = 8;

    fill("#fff");
    if (mouseX > x && mouseX < x + 9) {
      let name = Epl.getString(i, "name");
      let club = Epl.getString(i, "club");

      textFont("asap");
      text(age + " years old", 100, 250);
      text(club, 100, 200);
      text(name, 100, 100);
      text(salePrice + " million", 100, 150);
      fill("#89D2DC");
    } else {
      fill(0);
      textSize(40);
      text("English Premier League Soccer", 500, 400);
        text(' - Age and Market Value - ', 500, 450);
      fill("#fff");
    }
    rect(x, height - y, w, height);  // graph rectangles
  }
}


//let w = Epl.getRowCount(width / 2, height);