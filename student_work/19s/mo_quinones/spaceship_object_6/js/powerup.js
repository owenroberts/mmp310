/* power up class */

class Powerup extends Entity {
	constructor() {
		super(random(width), -100);
		this.speed.x = random(-2, 2);
		this.speed.y = 4; // random(10, 20);
		this.size /= 2;
	}
	
	display() {
        
        // power-up
        fill('#00A4F7');
        ellipse(this.x + random(-5, 5), this.y + random(-5, 5), this.size - 20, this.size - 20); // Blue Aura
        image(powerupImage, this.x, this.y, 50, 50); // power-up Image
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

