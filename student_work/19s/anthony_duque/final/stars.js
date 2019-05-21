class Star extends Entity {
    constructor() {
        super(random(width), height/4);
        let x = random(width);
        let y = random(-100, -10);
        // this.color = color('black');
        this.size = 20;
        this.pos = createVector(x, y);
        this.vel = createVector(0,0);
        this.acc = createVector();
    }
    display() {
        // stroke(this.color);
        strokeWeight(3);
        image(star,this.pos.x, this.pos.y, this.size, this.size);
    }

    update() {
        this.acc = starSpeed;
        this.pos.add(this.vel);
        this.vel.add(this.acc);
    }
}
