/*
	star class
*/

class Star extends Entity {
    constructor() {
        super(random(width), height * 0.04);
        let x = random(width);
        let y = random(-100, -10);
        this.color = color(random(100, 200), random(200), random(200));
        this.pos = createVector(x, y);
        this.vel = createVector(0,0);
        this.acc = createVector();
    }
    display() {
        stroke(this.color);
        strokeWeight(3);
        point(this.pos.x, this.pos.y);
    }
    
    update() {
        this.acc = gravity;
        this.pos.add(this.vel);
        this.vel.add(this.acc);
    }   
}
