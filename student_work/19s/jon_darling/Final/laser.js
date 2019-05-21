/*
	laser class
*/

class Laser extends Entity {
    constructor() {
        super(spaceship.x, spaceship.y);
        this.speed.y = -13;
        this.width  = 3;
        this.height = 20;
    }

    display() {
        fill('#fff');
        noStroke();
//        rect(this.x - width/10, this.y - 10, this.width, this.height);
//        rect(this.x + width/10, this.y - 10, this.width, this.height);
        rect(this.x - this.size/3, this.y + this.size*.01, this.width, this.height)
        rect(this.x + this.size/3, this.y + this.size*.01, this.width, this.height);
    }



    update() {
        super.update();
        // remove lasers above canvas
        if (this.y < -this.height) {
            this.remove(lasers);
            
        }
    }


}