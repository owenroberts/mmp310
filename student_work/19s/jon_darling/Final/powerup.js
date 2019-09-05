/*powerUp class
 ****************/

class Powerup extends Entity {
    constructor() {
        super(random(width), -110);
        this.speed.x = random(-2, 2);
        this.speed.y = 6;
        this.size /= 3.5;
    }

    display() {
        fill('green');
        noStroke();
        ellipse(this.x, this.y, this.size);//green dot
        fill('yellow');
        noStroke();
        ellipse(this.x, this.y, this.size/2 + random(-.5, 8));//yellow pulse
        noFill();
        stroke(255);
        strokeWeight(5);
        ellipse(this.x, this.y, this.size * 1.3 + random(-2, 4)); //white ring
        noFill();
        stroke('orange');
        strokeWeight(3);
        ellipse(this.x, this.y, this.size * 1.2 + random(-2, 4)); //orange ring
    }

    update() {
        super.update();

        if (this.y > height + this.size) {
            this.remove(powerups);
        }

        if (this.x <= 0 || this.x >= width) {
            this.speed.x *= -1;
        }

    }
}
