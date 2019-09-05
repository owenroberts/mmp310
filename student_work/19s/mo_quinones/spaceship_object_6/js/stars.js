/*
	star class
*/

class Star extends Entity {
    constructor() {
        super(random(width), height * 0.20);
        let x = random(width);
        let y = random(-100, -10);
        this.color = color(random(0, 255));
        this.pos = createVector(x, y);
        this.vel = createVector(0,0);
        this.acc = createVector();
    }
    display() {
        stroke(this.color);
        strokeWeight(4);
        point(this.pos.x, this.pos.y,);
    }
    
    update() {
        this.acc = gravity;
        this.pos.add(this.vel);
        this.vel.add(this.acc);
    }   
}
