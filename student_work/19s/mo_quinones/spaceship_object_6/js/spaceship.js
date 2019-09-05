/* spaceship class */

class Spaceship extends Entity {
	constructor() {
		super(width/2, height - 80);
        
        this.color = color(random(100, 200), random(200), random(200));
	}
	
	display() {
        
        fill(this.color);
        noStroke();
        
        //Thurster layer 1
        fill('#fff');
        ellipse(this.x - 18 + random(-5, 5), this.y + 60 + random(-5, 5), this.size / 8, this.size / 3); // White thruster
        
        fill('#fff');
        ellipse(this.x + 18 + random(-5, 5), this.y + 60 + random(-5, 5), this.size / 8, this.size / 3); // White thruster
        
//        image(spaceshipImage, this.x - 265, this.y - 100, 264, 179); // spaceship Image
        image(spaceshipImage, this.x, this.y + 20, 150, 80); // spaceship Image
//        gif_createImgShip.position(this.x - 265, this.y - 265, 10/5);
//        ellipse(this.x, this.y - 30, 264, 160); // spaceship
//        ellipse(this.x - 30, this.y + 60, 30, 60); // spaceship thruster left
//        ellipse(this.x + 30, this.y + 60, 30, 60); // spaceship thruster right
        
        //Thurster layer 2
        fill('#00A4F7');
        ellipse(this.x - 18 + random(-5, 5), this.y + 70 + random(-5, 5), this.size / 8, this.size / 4); // Blue thruster
        
        fill('#00A4F7');
        ellipse(this.x + 18 + random(-5, 5), this.y + 70 + random(-5, 5), this.size / 8, this.size / 4); // Blue thruster
        
        //Thurster layer 3
        fill('#fff');
        ellipse(this.x - 18 + random(-5, 5), this.y + 60 + random(-5, 5), this.size / 8, this.size / 3); // White thruster
        
        fill('#fff');
        ellipse(this.x + 18 + random(-5, 5), this.y + 60 + random(-5, 5), this.size / 8, this.size / 3); // White thruster
	}
	
	controls() {
		if (keyIsDown(RIGHT_ARROW)) {
			this.speed.x = 15;
            jet.play();
            jet.setVolume(0.1);        
            
		} else if (keyIsDown(LEFT_ARROW)) {
			this.speed.x = -15;
            jet.play();
            jet.setVolume(0.1);
            
		} else {
			this.speed.x = 0;	
		}
	}
}


