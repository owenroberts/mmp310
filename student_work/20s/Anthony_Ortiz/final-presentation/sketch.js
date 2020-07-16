/*final project
05/14/20 */

// loading graphics and characters
var bubbleImage

// runs before set up
function preload() {
    couchImage = loadImage('images/couch.png');
    radioImage = loadImage('images/radio.png');
    boxImage = loadImage('images/donut_box.png');
    drbenImage = loadImage('images/drben-clap.png');
    bubbleImage = loadImage('images/bubble.png');
    spillImage = loadImage('images/radio_spill.png');
    picImage = loadImage('images/drben_pic.png');
    boozyImage = loadImage('images/boozy.png');
    boozyImage2 = loadImage('images/boozy-center.png');
    boozyImage3 = loadImage('images/boozy-roar.png');
}

// global values
var bubbles = [];
var numBubbles = 30;

// interface value
var puddleColor = 270;
var puddleSlider;

var bubbleMinSpeed = 2;
var bubbleMaxSpeed = 14;
var bubbleSpeedSlider;

function setup() {
    createCanvas(windowWidth, windowHeight);

    boozyImage.resize(500, 500);
    boozyImage2.resize(500, 500);
    boozyImage3.resize(500, 500);

    //bubble positions
    for (let i = 0; i < numBubbles; i++) {
        let x = random(760, 900)
        let y = random(50, 500)
        let bubble = new Bubble(x, y, bubbleImage)
        bubbles.push(bubble);
    }

    // HTML content for puddle
    var puddleLabel = createElement('label', 'Deactivate the chemicals!')
    puddleLabel.position(780, 620);

    // slider for puddle
    puddleSlider = createSlider(2, puddleColor, puddleColor);
    puddleSlider.position(800, 660);
    puddleSlider.input(updatePuddle);

}

function updatePuddle() {
    puddleColor = puddleSlider.value();
    bubbleMaxSpeed = map(puddleColor, 2, 270, 2, 14);

    for (let i = 0; i < numBubbles; i++) {
        bubbles[i].ySpeed = random(bubbleMaxSpeed, bubbleMinSpeed);
    }
}

function draw() {

    // This area is the background

    // wall
    background("#5B2987");

    // door
    fill('#D2691E');
    stroke('black');
    rect(100, 200, 100, 200);

    // handle
    fill('#C0C0C0');
    stroke('#878787');
    ellipse(185, 300, 20, 20);

    //wall portriat
    image(picImage, 480, 100);

//ussr instructions
    fill(300, 300, 300);
    textFont('raleway');
    textSize(20);
    text('Stop Boozy from losing control by turning down the slider!', 50, 50);

    // This area is the middle ground

    // floor
    fill('#3c1f41');
    noStroke('');
    rect(0, 400, width, height);

    //outer drip ellipse
    fill('#53e364');
    noStroke();
    ellipse(300, 460, 120, 40);

    //inner drip ellipse
    fill('#47c456');
    noStroke();
    ellipse(300, 455, 110, 30);

    // couch
    image(couchImage, 200, 200);

    //original spill
    image(spillImage, 210, 295);

    // donut box
    image(boxImage, 180, 220);

    // radioactive capsule
    image(radioImage, 290, 317);

    // This area is the foreground

    // Dr ben
    image(drbenImage, 40, 310);

    //main puddle
    fill(0, puddleColor, 30);
    ellipse(870, 500, 100, 50);

    if (mouseX < width / 4) {
        image(boozyImage, 600, 200);

    } else if (mouseX < width / 2) {
        image(boozyImage2, 600, 200);

    } else {
        image(boozyImage3, 600, 200);

        // animated bubbles
        for (let i = 0; i < numBubbles; i++) {
            bubbles[i].draw();
            bubbles[i].update();
        }
    }
}
