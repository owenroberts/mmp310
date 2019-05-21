/* Laser class */

class Laser extends Entity {
	constructor(x, y) {
		super(spaceship.x + x, spaceship.y);
		this.speed.y = -10;
        this.height = 25;
	}
	
	display() {
		fill('red');
		noStroke();
		rectMode(CENTER);

//        rect(this.x, this.y - 95, 10, 25); // top laser
        image(laser,this.x, this.y, 30, 50); // top laser beam png
	}
    
    update() {
        super.update();
        
        if (this.y < -this.height) {
            this.remove(lasers);
        }
    }
}