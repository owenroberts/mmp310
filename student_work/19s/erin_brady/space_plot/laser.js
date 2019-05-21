//laser class

class Laser extends Entity {

    constructor(laserColor, speedY) {
        super(spaceship.x, spaceship.y);
        this.speed.y = speedY;
        this.width = 5;
        this.height = 25;
        this.laserColor = laserColor;
    }

    display() {
        fill(this.laserColor);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
    }

    update() {
        super.update();

        //remove lasers above canvas
        if (this.y < -this.height) {
            this.died = true;
        }

    }
}
