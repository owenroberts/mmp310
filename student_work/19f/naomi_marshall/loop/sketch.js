/*
    plot sketch
    9-23-19
    9-25-19
    Marshall
    mmp 310
*/

//var scene = "cold"
//story
/*
settings:cold,hot,earth
*/



function setup() {
    createCanvas(1100, 600);
    background('black');
    textSize(35);
    fill('white');
    text("press a to start", width / 2, 550);

    /*
    for (let x = 0; x < width; x += 100){
     ellipse(x, height/2, 100)//face
        var r = random(0);
		var g = random(255);
		var b = random(60);
        
		fill(r, g, b);
    }
    */
    /*
        for (let x = 0; x < width; x += 100){
        for (let y = 0; y < height; y += 25) {

     ellipse(x, y, random(2,50))//face
        
        
		
        var r = random(100);
		var g = random(255);
		var b = random(60);
        fill(r, g, b);
    }
    }
    */
    /*for (let x = -10; x < 1100; x += 10) {
		fill(255);
        noStroke();
		triangle(x, 600, x+10, 520, x+20, 600);
		fill(0);
		text(x, x, height/2);
	}*/
    /*
        
        for (let x = 100; x < 600; x += 100) {
    		fill(255);
    		ellipse(x, height/2, 100);
    		
    	}*/
    /*
	var w = 100;
	var h = height/2;
//	var s = x / 4;
	
	for (let i = 0; i < 5; i++) {
		
		var s = w / 4;
		var b = map(w, 0, width, 0, 255);
		
		fill(100, 100, b);
		ellipse(w, h, s); // face
		ellipse(w + 20, h - 20, 10); // right eye
		ellipse(w - 20, h - 20, 10); // left eye
		rectMode(CENTER);
		rect(w, h + 20, 40, 10, 10); // mouth
		x += 100
	}*/
}




//fill('white');
//'textSize(30);
//text("press a to start",width/2,500);

//keeps track of ellipse placement
/*
for(var x = 100; x < 1000; x+=1000) {
//fill(255);
ellipse(x,600/2,100);
    
//fill(0);
text(x,x, height/2)
}
//keeps track of amount of ellipses
for(let i = 0; i < 5; i++){
    fill(255);
    ellipse(x,600/2,100);
    console.log(i);
    
    fill(0);
    text(i,x, height/2)
}*/
/* not working with sketch
    function mousePressed() {
	if (scene == "cold") {
		scene = "hot";
	} else if (scene == "hot") {
		scene = "earth";
	} else if (scene == "earth") {
		scene = "cold";
	}

}
*/
//}
function draw() {
    if (key == "a") {
        firstp();
        gren(250, 200, 150, 30, 25, 0, 0);
        blu(600, 200, 150, 30, 25, 0, 0);
        for (let s = 0; s < 1100; s++) {
            strokeWeight(3);
            stroke('white');
            point(0 + s, random(-150, 600));
        }
    } else if (key == "w") {
        secondp();
        gren(250, 200, 150, 30, 25, 0, 0);
        blu(600, 200, 150, 30, 25, 0, 0);
        fill(255, 216, 117, 90);
        rect(0, 0, width, height);
        /*
    for (x =0; x , width; x += 50) {
    rect(x, 100+random(50), 90, height - 100);
    }*/
    } else if (key == "d") {
        thirdp();
        for (let x = -10; x < 1100; x += 10) {
            fill(83, 163, 39);
            noStroke();
            triangle(x, 400, x + 10, 360, x + 20, 400);
        }
        gren(250, 280, 150, 30, 25, 0, 80);
        blu(600, 280, 150, 30, 25, 0, 80);


    }


}

function blu(h, j, faceSize, eyeSize, eyeOffset, xbody, ybody) {
    fill(50, 186, 178);

    ellipse(h, j, faceSize); //face
    fill('DimGray');
    stroke('WhiteSmoke');
    //rotate();
    ellipse(h - eyeOffset - 25, j, eyeSize, 60); //left eye
    ellipse(h - 15, j - 22, eyeSize, 40); //middle eye
    ellipse(h + eyeOffset, j, eyeSize, 60); //right eye
    noStroke();
    fill(50, 186, 178);
    triangle(560 + xbody, 365 + ybody, 608 + xbody, 220 + ybody, 650 + xbody, 365 + ybody); //body
    rect(580 + xbody, 80 + ybody, 15, 65); //left antenna
    rect(600 + xbody, 80 + ybody, 15, 65); //right antenna
    ellipse(597 + xbody, 80 + ybody, 40); //antenna top

    rect(580 + xbody, 360 + ybody, 10, 65); //left leg 
    rect(600 + xbody, 360 + ybody, 10, 65); //middle leg
    rect(620 + xbody, 360 + ybody, 10, 65); //right leg
}

function gren(x, y, faceSize, eyeSize, eyeOffset, xbody, ybody) {
    fill(50, 186, 78);

    ellipse(x, y, faceSize); //face
    fill('black');
    stroke('white');
    //rotate();
    ellipse(x - eyeOffset, y, eyeSize, 60); //left eye
    ellipse(x + eyeOffset + 25, y, eyeSize, 60); //right eye
    noStroke();
    fill(50, 186, 78);
    triangle(210 + xbody, 375 + ybody, 258 + xbody, 220 + ybody, 296 + xbody, 375 + ybody); //body
    rect(240 + xbody, 80 + ybody, 15, 55); //antenna
    ellipse(247 + xbody, 80 + ybody, 40); //antenna top

    rect(230 + xbody, 360 + ybody, 15, 65); //left leg
    rect(270 + xbody, 360 + ybody, 15, 65); //right leg
}

function firstp() {
    background('MidnightBlue');
    //First Planet
    fill('LightCyan');
    rect(0, 400, width, 200);
    noStroke();
    fill('MediumBlue');
    triangle(660, 500, 908, 120, 1150, 500); //mountain
    fill('LightCyan');
    noStroke();
    triangle(760, 500, 908, 120, 1150, 500); //mountain
    rect(0, 400, width, 200);
    fill('LightCyan');
    ellipse(415, 5, 185);
    fill(196, 255, 253,100);
    ellipse(415, 5, 205);
    plot1();
    //text("Two Alien friends meet on a cold planet");
}

function plot1() {
    //Text Conversation
    textSize(15);
    fill('PaleGreen');
    text("Hey Blu, are you cold?", 330, 150);
    text("Let's go some place warmer", 330, 220);
    fill('Azure')
    text("Yes", 330, 190);
    text('Ok', 320, 250)
    textSize(30);
    fill('black');
    text("Two Alien friends meet on a cold planet", width / 4, 500);
    textSize(15);
    text("press w to continue", 800, 550);
}

function secondp() {
    //Second Planet

    fill(240, 206, 58, 200);
    background('Red')
    rect(0, 0, width, height);
    noStroke();
    fill(186, 93, 6);
    //rect(0, 400, width, 200);
    //fill('Orange');
    noStroke();
    //fill(255, 188, 54, 60);
    //triangle(760, 500, 908, 120, 1150, 500);//mountain
    rect(0, 400, width, 200);
    fill(255, 216, 117);
    ellipse(15, 15, 175);
    fill(255, 216, 117, 100);
    ellipse(15, 15, 255);
    fill(255, 216, 117, 100);
    ellipse(15, 15, 325);
    plot2();
    //ellipse(1000,1000,1020,300)
}

function plot2() {
    //Text Conversation
    textSize(15);
    fill('PaleGreen');
    text("You're right.", 330, 220);
    fill('Azure');
    text("It's too hot here.", 410, 200);
    text("Let's go somewhere else.", 360, 250);
    textSize(30);
    fill('black');
    text("It was too cold, so they went somewhere warm but found it too hot", 150, 500);
    textSize(15);
    text("press d to continue", 800, 550);
}

function thirdp() {
    background(122, 222, 214);
    fill(255, 216, 117);
    ellipse(1080, 15, 175);

    noStroke();
    for (let s = 0; s < 1100; s += 100) {
        //r = random(80);
        fill(87, 64, 6);
        rect(30 + s, 100, 45, 355);
        fill(95, 135 + s / 10, 14);
        ellipse(45 + s, 100, 255, 155);
    }

    fill(83, 163, 39);
    noStroke();
    rect(0, 400, width, 200);

    //ellipse(1000,1000,1020,300)
    plot3();
}

function plot3() {
    textSize(15);
    fill('PaleGreen');
    text("Don't worry, it will be just right soon.", 300, 350);
    fill('Azure');
    text("Isn't it still kinda cold?", 370, 300);
    textSize(30);
    fill('black');
    text("They were too hot, so they settled on Earth to wait for it to be just right.", 100, 530);

}
