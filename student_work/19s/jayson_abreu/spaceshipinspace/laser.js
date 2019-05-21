/*
	laser class
*/

class Laser extends Entity {
	constructor() {
		super(spaceship.x, spaceship.y);
        const delta = {
            x: mouseX - spaceship.x,
            y: mouseY - spaceship.y
        }
        this.speed.x = delta.x / 20;
		this.speed.y = delta.y / 20;
        this.angle = tan(delta.x / delta.y);
        
		this.width = 10;
		this.height = 25;
		this.color = {
			r: laserRed,
			g: 0,
			b: 200
		};
	}
	
	display() {
        
        push();
        translate(this.x, this.y);
//        rotate(this.angle);
		
		image(strike, 0, 0);
        
        // hit box
//        noFill();
//        stroke('red');
//        ellipse(0, 0, this.size);
        pop();
	}
	
	update() {
		super.update();
		
		// remove lasers above canvas
		if (this.y < -this.height) {
			this.remove(lasers);
		}
	}
}

