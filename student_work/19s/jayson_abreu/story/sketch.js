/*
    interactive story by jayson 
*/

// global variable

//beginning, endone, endtwo
var currentSetting = "beginning";
var story = "Two bros debate on how to get past the anti-bro barrier.";
var storytwo = "Unfotunately, the bro-hammer just sorta bounced off and crushed red bro.";
var storythree = "Turns out living mostly off doritos makes you less and less aerodynamic. Huh.";

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(40);
    textAlign(CENTER, CENTER);
}

function mouseClicked() {
    if (currentSetting == "endone") currentSetting = "beginning";
    if (currentSetting == "endtwo") currentSetting = "beginning";

    // detect which character is clicked
    else if (currentSetting == "beginning") {
        // clicked the orange
        //ellipse(200, 400, 160, 100);
        var hammer = dist(mouseX, mouseY, 200, 400);
        if (hammer < 160 / 2) {
            currentSetting = "endone";
        }
        //ellipse(600, 460, 160, 100);
        // clicked banana
        var spring = dist(mouseX, mouseY, 600, 460);
        if (spring < 160 / 2) {
            currentSetting = "endtwo";
        }
    }
}



function bg() {

    //sky
    fill('#aec4e5');
    noStroke();
    rect(0, 0, 1000, 8000);

    //ground
    fill('#604130');
    noStroke();
    rect(0, 700, 1000, 2000);

    //grass
    fill('#308744');
    noStroke();
    rect(0, 700, 1000, 100);
}

function draw() {
    background(50);

    if (currentSetting == "beginning") {


        bg();
        // first character
        fill('#4c7e84');
        noStroke();
        ellipse(200, 590, 260, 200); // body
        stroke(0);
        ellipse(250, 570, 20, 35); // left eye
        ellipse(200, 570, 20, 35); // right eye

        // second character
        fill('#8c5269');
        noStroke();
        arc(500, 590, 200, 200, 0, PI + QUARTER_PI, CHORD); //body
        stroke(0);
        arc(500, 570, 20, 27, 0, PI, CHORD); //right eye
        arc(450, 570, 20, 27, 0, PI, CHORD); //left eye

        //wall
        fill('#422222');
        noStroke();
        rect(800, 100, 100, 600);

        //bubbleone
        fill('white');
        noStroke();
        ellipse(200, 400, 160, 100);
        ellipse(270, 440, 80, 50);
        ellipse(270, 470, 40, 25);
        fill('#3a3a3a');
        rect(165, 365, 80, 40);
        fill('#7a671d');
        rect(196, 404, 17, 40);

        //bubbletwo
        fill('white');
        noStroke();
        ellipse(600, 460, 160, 100);
        ellipse(540, 500, 80, 50);
        ellipse(540, 530, 40, 25);
        fill('#9e2929');
        rect(570, 430, 60, 25);
        fill('#bababa');
        rect(575, 470, 50, 8);
        rect(575, 460, 50, 8);

        fill('#184182');

        fill('#308744');
        noStroke();
        text(story, 150, 700, 800, 300);


    } else if (currentSetting == "endone") {
        bg();
        // first character
        fill('#4c7e84');
        noStroke();
        ellipse(600, 590, 260, 200); // body
        stroke(0);
        ellipse(650, 570, 20, 25); // left eye
        ellipse(700, 570, 20, 15); // right eye

        // second character
        fill('#8c5269');
        noStroke();
        arc(180, 630, 250, 130, 0, PI + QUARTER_PI, CHORD); //body
        stroke(0);
        arc(100, 600, 20, 32, 0, PI, CHORD); //right eye
        arc(155, 610, 27, 27, 0, PI, CHORD); //left eye


        //wall
        fill('#422222');
        noStroke();
        rect(800, 100, 100, 600);

        //hammer
        noStroke();
        push();
        rotate(PI / 15);
        fill('#3a3a3a');
        rect(180, 290, 120, 200);
        pop();

        push();
        rotate(PI / 15);
        fill('#7a671d');
        rect(300, 370, 400, 40);
        pop();

        fill('#308744');
        noStroke();
        text(storytwo, 200, 700, 800, 300);


    } else if (currentSetting == "endtwo") {
        bg();
        // first character
        fill('#4c7e84');
        noStroke();
        ellipse(765, 250, 70, 270); // body
        stroke(0);
        ellipse(740, 199, 17, 25); // left eye
        ellipse(770, 200, 17, 35); // right eye

        // second character
        fill('#8c5269');
        noStroke();
        arc(765, 330, 70, 330, 0, PI + QUARTER_PI, CHORD); //body
        stroke(0);
        arc(770, 350, 10, 52, 0, PI, CHORD); //right eye
        arc(755, 370, 10, 57, 0, PI, CHORD); //left eye

        fill('#9e2929');
        noStroke();
        rect(500, 530, 200, 60);
        fill('#bababa');
        rect(525, 600, 150, 30);
        rect(525, 650, 150, 30);

        //wall
        fill('#422222');
        noStroke();
        rect(800, 100, 100, 600);


        fill('#308744');
        noStroke();
        text(storythree, 200, 700, 800, 300);
    }


}