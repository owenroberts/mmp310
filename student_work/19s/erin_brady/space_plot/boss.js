//boss class

class Boss extends Entity {

    constructor() {
        super(width / 2, 200);
        this.speed.x = random(5, 8);
        this.laserInterval = 30;
        this.count = 0;
    }

    display() {
        image(bossSprite, this.x, this.y);
    }

    update() {
        super.update();

        //bounce boss off the sides of the screen
        if (this.x <= 100 || this.x >= width - 100) {
            this.speed.x *= -1;
        }

        if (this.count == this.laserInterval) {
            bossLasers.push(new bossLaser());
            this.count = 0;
            this.speed.x += random(-1, 3);
        }

        this.count++;
    }
}
