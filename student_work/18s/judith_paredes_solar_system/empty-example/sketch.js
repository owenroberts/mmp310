var stars = [];
var speed = [
  0.01,
  0.02,
  0.03,
  0.04,
  0.002,
  0.003
];

var mercury = 0; 
var venus = 0;
var earth = 0;
var mars = 0;
var jupiter = 0;
var saturn = 0;
var rings = 0;
var uranus = 0;
var neptune = 0;
var sun = 0;

// Color 
var fillColor = "red";

// Scale
var scaleA = .2;
var scaleB = .2;
 
//Background image
var bkg;

function setup() {

    //Button to add more stars to the background.
    var button = createButton("Add Stars");
        button.mousePressed(addStars);
        createCanvas(800, 800);
        addStars();
    }

function addStars(){
    // 400 random stars are created 
    for (var i = 0; i < 400; i++) {
        stars.push(new position());
    }  
}

function draw() {
    //Changes background to image of planet selected
    if (bkg)
        background(bkg);
    else 
        background(0);

    for (var s = 0; s < stars.length; s++) {
        stars[s].display();
    }
    drawPlanets();
}

//  Planet Orbit lines
function drawPaths() {
    noFill();
    stroke(255);
    strokeWeight(1);
}

// Planets Name 
function writePlanetNames() {
    fill("white")
    noStroke();
    textSize(13);
}

// Randomizes stars in the background 
function position() {
    var light = color(255, 255, 255);
    var dark = color(0, 0, 0);

    this.x = random(0, width);
    this.y = random(0, height);
    this.diameter = random(3, 3);
    this.speed = 0;

    this.display = function () {
        fill(light);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}

// toggles Drawing loop
var isDrawing = true;

// Key Functions
function keyPressed() {
	
// Spacebar rescales solar system 
    if (key == ' ') {
        scaleA += .2;
        scaleB += .2;

        if (scaleA == 1 && scaleB == 1) {
            scaleA = .2;
            scaleB = .2;
        }
    } else if (keyCode == RETURN) {
        
// Toggles Drawing loop        
        if (isDrawing) {
            noLoop();
        } else {
            loop();
        }
        isDrawing = !isDrawing; 
    } 
}

// Draws the Solar System
function drawPlanets() {

        // Mouse Pressed planets above the solar system

        //Draws Jupiter 

        push();
        text("Mercury", 160, 100)	
        fill(192, 192, 192);
        	ellipse(200, 50, 30, 30);
        pop();

        //Draws Venus

        push();
        text("Venus", 230, 100);
        fill(139, 0, 0);	
        	ellipse(250, 50, 30, 30);
        pop();

        //Draws Earth
        push();
        text("Earth", 280, 100)	;
        fill(30, 144, 255);	
        	ellipse(300, 50, 30, 30);
        pop();

        //Draws Mars
        push();
        text("Mars", 335, 100);	
        fill("red");
        	ellipse(350, 50, 30, 30);
        pop();

        //Draws Jupiter
        push();
        text("Jupiter", 380, 100);
        fill(255, 228, 181);
        	ellipse(400, 50, 30, 30);
        pop();

        //Draws Saturn 
        push();
        text("Saturn", 430, 100);
        fill(210, 105, 30);
        	ellipse(450, 50, 30, 30);
        	noFill();
            stroke(210, 105, 30);
            strokeWeight(1);
            //Draws Saturns rings
            arc(450, 49, 40, 20, 4, PI + QUARTER_PI, PIE);
            arc(450, 50, 42, 20, 4, PI + QUARTER_PI, PIE);
            arc(450, 52, 44, 20, 4, PI + QUARTER_PI, PIE);
        pop();

        //Draws Uranus
        push();
        text("Uranus", 480, 100);
        fill(95, 158, 160);
        	ellipse(500, 50, 30, 30);
        pop();

        //Draws Neptune
        push();
        text("Neptune", 530, 100);
        fill(0, 0, 128);
        	ellipse(550, 50, 30, 30);
        pop();

        // Draws Sun
            push();
            stroke(255, 140, 0);
            strokeWeight(5);
            fill(255, 255, 0);

        // Coordinate X and Y. Draws sun in the center of the canvas.  
            var cx = width / 2;
            var cy = height / 2;
            ellipse(cx, cy, 90, 90);

        // Mouse, Plutos color changes as it gets closer to the SUN
            var d = dist(cx, cy, mouseX, mouseY);
            fill(fillColor);
            noStroke();

        //Draws Pluto
            ellipse(mouseX, mouseY, 20, 20);
            text("pluto", mouseX + 10, mouseY + 10);
            textSize(13);

        // When pluto gets closer to sun it changes colors 
        	if (d < 10 ){
        		fillColor = "white";
        	} else if (d < 25){
        		fillColor = "black";
        	} else if (d < 45){
        		fillColor = "brown";
        	} else if (d < 80){
        		fillColor = color(165, 42, 42);
        	} else if (d < 120){
        		fillColor = color(178, 34, 34);
        	} else if (d < 140){
        		fillColor = color(255, 51, 0);
        	} else if (d < 190){
        		fillColor = color(255,99,71);
        	} else if (d < 300){
        		fillColor = color(220,220,220);
        	} else if (d < 350){
        		fillColor = color(192,192,192);
        	} else if (d < 400){
        		fillColor = color(128,128,128);
        	} else if (d < 450){
        		fillColor = color(112,128,144);
        	}else (d < 500);
            pop();
            translate(width / 2, height / 2);
            scale(scaleA);

        // Orbit Paths

            // Neptune Path
            drawPaths();
            ellipse(0, 0, 740, 760, 60);

            // Uranus Path
            ellipse(0, 0, 640, 660, 60);

            // Saturn Path
            ellipse(0, 0, 540, 560, 60);

            // Jupiter Path
            ellipse(0, 0, 440, 460, 60);

            // Mars Path
            ellipse(0, 0, 340, 360, 60);

            // Venus Path
            ellipse(0, 0, 240, 260, 60);

            // Earth Path
            ellipse(0, 0, 280, 290, 60);

            // Mercury Path
            ellipse(0, 0, 200, 210, 60);

        // Text "Sun"
            writePlanetNames()
            text("SUN", 55, 30);


        // Draws and Rotates all the planets in the solar system model

            //Neptune 
            push();
            rotate(neptune);
            fill(0, 0, 128);
            stroke(30, 144, 255);
            strokeWeight(2);
            ellipse(260, 260, 33, 33);
            writePlanetNames()
            text("NEPTUNE", 300, 260, 33, 33);
            pop();


            //Uranus
            push();
            rotate(uranus);
            fill(95, 158, 160);
            stroke(30, 144, 25);
            strokeWeight(2);
            ellipse(230, 230, 39, 39);
            writePlanetNames()
            text("Uranus", 250, 190, 39, 39);
            pop();

            //Saturn
            push();
            rotate(saturn);
            fill(210, 105, 30);
            stroke(210, 105, 30);
            strokeWeight(2);
            ellipse(190, 190, 39, 39);
            writePlanetNames()
            text("Saturn", 220, 190, 39, 39);
            pop();

            // Draws Saturns Rings
            push();
            rotate(rings);
            noFill();
            stroke(210, 105, 30);
            strokeWeight(1);
            arc(190, 193, 55, 30, 4, PI + QUARTER_PI, PIE);
            arc(189, 189, 54, 30, 4, PI + QUARTER_PI, PIE);
            arc(190, 190, 52, 30, 4, PI + QUARTER_PI, PIE);
            pop();

            //Jupiter
            push();
            rotate(jupiter);
            fill(255, 228, 181);
            stroke(178, 34, 3);
            strokeWeight(2);
            ellipse(155, 155, 50, 50);
            writePlanetNames()
            text("Jupiter", 180, 155, 50, 50);
            pop();

            // Mercury
            push();
            rotate(mercury);
            fill(192, 192, 192);
            stroke("pink");
            strokeWeight(2);
            ellipse(70, 70, 5, 5);
            writePlanetNames()
            text("Mercury", 50, 30);

            // Mars

            push();
            rotate(mars);
            fill("red");
            stroke("brown");
            strokeWeight(2);
            ellipse(125, 125, 7, 7);
            writePlanetNames()
            text("Mars", 125, 125, 25, 25);
            pop();


            //Earth
            push();
            rotate(earth);
            fill(30, 144, 255);
            noStroke();
            strokeWeight(1);
            ellipse(100, 100, 25, 25);
            writePlanetNames();
            text("Earth", 110, 110, 25, 25);
            pop();


            //Venus
            push();
            rotate(venus * 1.3);
            fill(139, 0, 0);
            noStroke();
            strokeWeight(1);
            ellipse(100, 70, 18, 18);
            writePlanetNames()
            text("Venus", 80, 30);
            pop();


        //Speen of the Rotation   
            earth = earth + speed[0];
            mars = mars + speed[4];
            saturn = saturn + speed[0];
            rings = rings + speed[0];

            jupiter = jupiter + speed[1];
            mercury = mercury + speed[1];

            uranus = uranus - speed[5];
            neptune = neptune + speed[2];

            venus = venus - speed[3];
}

// NASA API

var endpoint = "https://images-api.nasa.gov/search?media_type=image&q="

// Returns data to the planets that are selected
function getData(planet, callback) {
    $.getJSON(endpoint + planet, function (data) {
        // displays data on console
        console.log(data);
        callback(data.collection.items)
    });
}

function mousePressed() {
// When Sun is clicked, the background changes to image of the sun
    //Sun coordinates
    var cx = width / 2;
    var cy = height / 2;
    var dis = dist(cx, cy, mouseX, mouseY);
    if (dis < 50) {
        getData('sun', function(imgURLs) {
           bkg = loadImage(random(imgURLs).links[0].href); 
        });
    } 

    //Mercury coordinates
    var merDis = dist(200, 50, mouseX, mouseY);

    // Venus coordinates
    var veDis = dist(250,50, mouseX, mouseY);

    //Earth coordinates
    var earDis = dist(300,50, mouseX, mouseY);

    //Mars coordinates
    var marsDis = dist(350,50, mouseX, mouseY);
    
    //Jupiter coordinates
    var jupDis = dist(400,50, mouseX, mouseY);

    // Saturn coordinates
    var satDis = dist(450,50, mouseX, mouseY);

    //Uranus coordinates
    var uraDis = dist(500,50, mouseX, mouseY);

    //Neptune  coordinates
    var nepDis = dist(550,50, mouseX, mouseY);
  
// When the mouse is clicked within a certain planets area, the background changes to image of that planet

//Mercury
    if ( merDis < 20) {
    	getData('mercury', function(imgURLs) {
         bkg = loadImage(random(imgURLs).links[0].href); 
          
        });
}

//Venus
    if ( veDis < 20) {
    		getData('venus', function(imgURLs) {
         bkg = loadImage(random(imgURLs).links[0].href);  
    	});
}

//Earth
    if ( earDis < 20) {
    	getData('earth', function(imgURLs) {
         bkg = loadImage(random(imgURLs).links[0].href); 
	});
}

//Mars
    if ( marsDis < 20) {
    	getData('mars', function(imgURLs) {
         bkg = loadImage(random(imgURLs).links[0].href); 
	});
}

//Jupiter

    if ( jupDis < 20) {
    	getData('mercury', function(imgURLs) {
         bkg = loadImage(random(imgURLs).links[0].href); 
	});
}

//Saturn

    if ( satDis < 20) {
    	getData('saturn', function(imgURLs) {
         bkg = loadImage(random(imgURLs).links[0].href); 
	});
}

//Uranus
    if ( uraDis < 20) {
    	getData('uranus', function(imgURLs) {
         bkg = loadImage(random(imgURLs).links[0].href); 
	});
}

//Neptune
    if ( nepDis < 20) {
    	getData('neptune', function(imgURLs) {
         bkg = loadImage(random(imgURLs).links[0].href); 
	});
  }
}