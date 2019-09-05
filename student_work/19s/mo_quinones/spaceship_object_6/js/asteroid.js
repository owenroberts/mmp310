/*  Asteroid class  */


class Asteroid extends Entity {
	constructor() {
		super(random(width), -100);
		this.speed.x = random(-1, 1);
		this.speed.y = random(5);
		
		this.color = color(random(100, 200), random(200), random(200));
        this.size = random(width/2) / 2;
	}
	
	display() {
		fill(this.color);
		noStroke();
//		ellipse(this.x, this.y, this.size); // testing position
        image(asteroidImage, this.x, this.y,  this.size, this.size); // asteroid Image
//        image(asteroidImage2, this.x, this.y,  this.size, this.size); // asteroid Image2
//        image(asteroidImage3, this.x, this.y,  this.size, this.size); // asteroid Image3
        
        // debug
        stroke('green');
        noFill();
//        ellipse(this.x, this.y, this.size);
	}
    
    update() {
        super.update();
        
        // remove asteroids below the canvas
        if (this.y > height + this.size) {
            this.died = true;
        }
        
        // bonce asteroids off sides
        if (this.x <= 0 || this.x >= width) {
            this.speed.x *= -1;
        }
    }
}


