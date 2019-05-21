
class Asteroid extends Entity {
	constructor() {
		super(random(width), -100);
		this.speed.x = random(-1, 1);
		this.speed.y = random(5);
		this.color = color(random(100, 200), random(200), random(200));
        
        this.start = this.x;
        this.angle = 0;
        this.spread = random(200, 400);
	}
	
	display() {
	  image(terror, this.x, this.y);
        
//        noFill();
//        stroke('green');
//        ellipse(this.x, this.y, this.size);
	}
	
	update() {
		super.update();
        
        this.x = this.start + sin(this.angle) * this.spread;
        
        this.angle += 0.012;
        
		
		// remove asteroids below the canvas
if (this.y > height + this.size) {
  this.died = true;
}
		
		
		
	}
}
