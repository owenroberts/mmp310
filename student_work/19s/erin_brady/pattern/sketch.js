//mmp 310 week 4
//pattern variations
//by erin brady

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    noStroke();
    frameRate(1);
}

function draw() {
    
    //random yellow background
    colorMode(HSL);
    let h1 = random(25, 60);
    let s1 = random(70, 100);
    let l1 = random(70, 80);
    background(h1, s1, l1);

    //pattern
    let y = 200;
    for (let x = -150; x <= width; x += 200) {

        //random purples
        let h2 = random(270, 290);
        let s2 = random(20, 100);
        let l2 = random(20, 50);
        fill(h2, s2, l2);


        //create random triangles
        if (random(1) > 0.5) {
            triangle(x, y, x + 300, y, x + 150, y + 200);
        } else {
            triangle(x, y + 200, x + 300, y + 200, x + 150, y);
        }

        // random position choices
        var randomChoice = random(3); 
        if (randomChoice > 2) {
            y += 50;
        } else if (randomChoice > 1) {
            y -= 50;
        } else {
            y += 100;
        }


    }
}
