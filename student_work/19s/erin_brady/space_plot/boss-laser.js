// boss laser class

class bossLaser extends Entity {

    constructor() {
        super(boss.x, boss.y);
        this.speed.y = 15;
        this.width = 5;
        this.height = 25;
        this.color = 'red'
    }

    display() {
        fill('red');
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
