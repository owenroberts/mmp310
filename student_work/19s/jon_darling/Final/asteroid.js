class Asteroid extends Entity {
    constructor(x, y, size) {
        super(random(width), height * 0.04);
        if (x) this.x = x;
        if (y) this.y = y;

        if (size) {
            // asteroid particle
            this.size = size;
            this.speed.y = random(-5, 5);
            this.speed.x = random(-5, 5);
        } else {
            this.speed.y = random(4);
            this.speed.x = random(-4, 4);
        }

        // random points
        this.points = [];
        var r = random(6, 10);
        for (let i = 0; i < r; i++) {
            var angle = PI * 2 / r * i;
            this.points.push({
                x: this.size * sin(angle) + random(-this.size / 2, this.size / 2),
                y: this.size * cos(angle) + random(-this.size / 2, this.size / 2)
            });
        }
    }

    display() {
        noFill();
        stroke(255);
        strokeWeight(1);

        beginShape();
        for (let i = 0; i < this.points.length; i++) {
            vertex(
                this.x + this.points[i].x / 2.5,
                this.y + this.points[i].y / 2.5
            );
        }
        endShape(CLOSE);

        //         beginShape();
        //        for (let g = 0; g < this.points.length; g++) {
        //            vertex(
        //                this.x + this.points[g].x / 20,
        //                this.y + this.points[g].y / 20
        //            );
        //        }
        //        endShape(CLOSE);

    }

    update() {
        super.update();

        // remove asteroids below the canvas
        if (this.y > height + this.size) {
              this.died = true;

        }

        // bounce asteroids off sides
        if (this.x <= 0 || this.x >= width) {
            this.speed.x *= -1;
        }

        //include for difficult level
//        this.speed.x += random(-1, 1);
    }
}
