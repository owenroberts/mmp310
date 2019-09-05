/*
	spaceship class
*/

class Spaceship extends Entity {

    constructor() {
        super(width / 2, height - 125);
    }

    display() {
        image(shipSprite, this.x, this.y);
    }

    controls() {
        if (keyIsDown(RIGHT_ARROW)) {
            this.speed.x = 5;
        } else if (keyIsDown(LEFT_ARROW)) {
            this.speed.x = -5;
        } else {
            this.speed.x = 0;
        }
    }
}
