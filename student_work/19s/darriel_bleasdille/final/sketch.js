var triangles = [];

var r, g, b;
var blinkCount = 0;
var blinkCounter = 4;

function setup() {
    createCanvas(windowWidth, windowHeight);
    r = random(0, 255);
    b = random(0, 255);
    g = random(0, 255);

    noStroke();

    triangles.push(new Triangle(width / 2, height / 2, 200, 0.025, "green")); //five
    triangles.push(new Triangle(width / 2, height / 2, 200, -0.025, "pink")); //five

    triangles.push(new Triangle(width / 5, height / 2, 200, 0.025, "green")); //one
    triangles.push(new Triangle(width / 5, height / 2, 200, -0.025, "pink")); //one

    triangles.push(new Triangle(900, height / 2, 200, 0.025, "green")); //five

    triangles.push(new Triangle(900, height / 2, 200, -0.025, "pink")); //five

    //    (x, y, s, p, )


    var columns = 6;
    var w = width / columns;

    var rows = 4;
    var h = height / rows;

    for (let x = w; x < width - w / 2; x += w) {
        for (let y = h; y < height - h / 2; y += h) {
            triangles.push(new Triangle(x, y, 100, 0.025));
            triangles.push(new Triangle(x, y, 100, -0.025));


        }
    }
}

function draw() {
    background(0);

    for (let i = 0; i < triangles.length; i++) {
        triangles[i].display();
        triangles[i].update();
    }
    
if (blinkCount = blinkCounter) {
    r = random(0, 255);
    b = random(0, 255);
    g = random(0, 255);
    blinkCounter = 2; 
    }
     
    blinkCount ++;
    
    
    
    
    fill(r, g, b, 160);

    rect(0, 0, width, height);

}

class Triangle {
    constructor(x, y, s, p, clr) {
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.size = s;
        this.speed = p;
        //        this.color = clr || color('rgb(0,255,0)');
        this.color = clr || color("black");
    }
    display() {
        push();
        translate(this.x, this.y);
        rotate(this.angle);



        //        stroke('rgb(0,255,0)');

        stroke(this.color);

        strokeWeight(7);
        noFill();


        triangle(0, -this.size,
            this.size, this.size,
            -this.size, this.size);

        pop();
    }
    update() {
        this.angle += this.speed; // speed
    }
}
