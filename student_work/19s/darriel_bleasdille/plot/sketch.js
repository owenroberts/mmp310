/*
MMP310 week 1
Interactive Story
Plot Sketch
By Darriel
*/


// global variables

//
var g;
var g1;
var g2;
var g3;
var g4;
var g5;
var g6;
var g7;
//
//var venusX = 200;
//var venusY = 200;
//var venusSize2 = 200 * 4;
//var venusSize = 200;
//var venusEyeSize = venusSize2 / 10;
//
//var marsX = 930;
//var marsY = 450;
//var marsSize = 350;
//var marsEyeSize = marsSize / 10;
//
//
//var moonX = 600;
//var moonY = 100;
//var moonSize = 100;
//
//var story = "Battle for the universe";
//var instruction = "Click A, B and C to change setting";
//var storyX;
//var storyY;
//
//
//var sunX = 740;
//var sunY = 100;
//var sunSize = 200;

function preload() {
    

    g2 = loadImage("galax2.jpg");
    g3 = loadImage("galax3.jpg");
    g4 = loadImage("galax4.jpg");
    g5 = loadImage("galax5.jpg");
    g6 = loadImage("galax6.jpg");
    g7 = loadImage("galax7.jpg");
}

function setup() {
    
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);


}


//(story, instructions, instructions2, x, y, y2)




function draw() {
    noStroke();
    background(175);   

    
    
    if (key == 'a'|| key == "A") {
     
     image(g7 , 0, 0, width, height)
     venus(1000,580,200,"LIGHTSKYBLUE"); // first character
     mars (200,200, 300); // second character
     narrative( "Out of all the planets in the universe King Pletus Lord of all Planets, was in love with", " the color blue so much that he married the only blue planet in the universe, Venus.", "Click B to continue", 400, height - 150, height - 100);


        

    } else if (key == 'b'|| key == "B") {

     background (125);
        
      
        
        
     venus(200,200,600,"LIGHTSKYBLUE"); // first character
     mars (930, 500, 350); // second character
     moon(1140, 120, 200);   // third character
        
     narrative( "Venus already had 5 children at the time. NaNa the King's most trusted advisor", " advised him against the marriage. But King Pletus irgnored him.", "Click C to continue", 400, height - 150, height - 100);

 
 


    } else if (key == 'c' || key == "C") {

      image(g4, 0, 0, width, height)
      venus(200,200,200,"LIGHTSKYBLUE"); // first character
        
      venus(980, 100, 100,"red"); // baby 1
      venus(800, 200, 100,"lightgreen"); // baby 2
      venus(1110, 220, 100,"purple"); // baby 3
      venus(650, 400, 100,"orange"); // baby 4
      venus(900, 500, 100,"lightskyblue"); // baby 5
      venus(1160, 600, 100,"white"); // baby 6
      venus(1100, 400, 100,"yellow"); // baby 7
      venus(890, 330, 100,"pink"); // baby 8
      venus(100, 300, 100,"brown"); // baby 9
        
        
        
        
        
        
      narrative( "5 years later King Pletus and Venus made 30 kids, but only 4 survived.", " 'where are the spots', 'where are the spots' King Pletus yelled", "Click Spacebar", 400, height - 150, height - 100);
    


        
        
    } else {
        
        // no key is pressed (beginning)
        
        image(g3, 0, 0, width, height) 

       narrative( "CLICK", " A, B, or C", "Birth of the Universe", width/2, height-150, height-100); 
        
    }
}




function venus (x, y, size, c) {


      var eyeSize = size / 10;
        
        
        //body
        
        noFill();
        fill(c);
        noStroke();
        ellipse(x, y, size); 
        stroke(0);

        //belt
        stroke('yellow');
        noFill(0);


        arc(x + 10, y + 10, size * 2, size / 2, -1, PI + 0.3); // large belts arc

        noFill(0);

        ellipse(x + 10, y + 10, size * 1.8, size / 2.6); // small belt circle


        // eye hider ellipse

        fill(c)
        noStroke();
        ellipse(x, y - 20, size - 4, 90);

        // eye

        fill('black');
        ellipse(x + eyeSize * 3, y - eyeSize, eyeSize); // left eye
        ellipse(x, y - eyeSize, eyeSize); // right eye 

        // pupil
        fill('yellow')
        ellipse(x + eyeSize * 3, y - eyeSize, eyeSize / 3); // left pipil
        ellipse(x, y - eyeSize, eyeSize / 3); // right pupil

        // mouth


        fill('black')
        rect(x + 40, y + 30, size - 190, 17);  




}


function moon (x, y, size) {


// moon

        fill('yellow');
        noStroke();

 
        arc(x, y, size, size, -HALF_PI, HALF_PI); // moon background
        fill(125);
        arc(x, y, size / 2, size, -HALF_PI, HALF_PI); // moon foreground
    
        noFill();
        stroke(0);
        arc(x, y, size * 3 / 4, size, -HALF_PI, HALF_PI); // moon contour
    
    
    
    

        fill('red');
        noStroke();
        ellipse(x + 55 , y - 38, 15); // left eye
        ellipse(x + 80 , y - 42, 15); // right eye
    
        fill('white')
        ellipse(x + 55 , y - 38, 15/5); // left pupil
        ellipse(x + 80 , y - 42, 15/5); // right pupil
    
    
    


}


function mars (x, y, size) {


  var eyeSize = size / 10;

        //body
    
        noFill();
        fill('black');
        noStroke();
        ellipse(x, y, size);
        stroke(0);


        // eye

        fill('yellow');
        ellipse(x + eyeSize * 3, y - eyeSize, eyeSize); // left eye
        ellipse(x, y - eyeSize, eyeSize); // right eye 

        // pupils

        fill('orange')

        ellipse(x + eyeSize * 3, y - eyeSize + 10, eyeSize / 3); // left pipil
        ellipse(x, y - eyeSize + 10, eyeSize / 3); // right pupil

        // mouth


        fill('yellow')

        rect(x + 40, y + 30, size - 220, 17);


        // mars spots

        noFill();

        fill('grey');
        noStroke();
        ellipse (x - 110, y - 60, size / 5); //spot 1
    
        stroke(0);
        noFill();

        fill('grey');
        noStroke();
        ellipse(x + 80, y - 100, size / 6); //spot 2
        stroke(0);


        fill('grey');
        noStroke();
        ellipse(x - 80, y + 90, size / 8); //spot 3
        stroke(0);


        fill('grey');
        noStroke();
        ellipse(x + 70, y + 100, size / 5); //spot 4
        stroke(0);
        //    
        //        
        fill('yellow');
        noStroke();
        ellipse(x + 78, y, size / 70); //spot 5
        stroke(0);

      


}


function sun (x, y, size) {

 
        // sun

        fill('lightgreen');
        noStroke();
        ellipse(x + 600, y - 90, size - 25);
        stroke(0);
        

}


function narrative (story, instructions, instructions2, x, y, y2) {
    
	// narrative
	stroke(255);
    fill('red');
	textSize(20);
	text(story, x, y );
    
	// instructions
	textSize(20);
   fill('yellow');
	text(instructions, x, y2);
    fill('yellow');
    textSize(30);
	text(instructions2, width/2, height -610);
    
    
    

    
    
    
}


 