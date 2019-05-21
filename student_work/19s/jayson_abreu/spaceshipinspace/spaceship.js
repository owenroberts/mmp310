/*
	spaceship class
*/

class Spaceship extends Entity {
    constructor() {
        super(width / 2, height - 120);
        this.size = 20;
    }

    display() {
        image(sprite, this.x + 20, this.y);
    
        
        // debug
//        noFill();
//        stroke ('yellow');
//        ellipse (this.x, this.y,this.size);
//        
//        fill('yellow');
//        ellipse(this.x, this.y, 5);


    }

    controls() {
        if (keyIsDown(68)) {
            this.speed.x = 5;
        } else if (keyIsDown(65)) {
            this.speed.x = -5;
        } else {
            this.speed.x = 0;
        } 
        
        if (keyIsDown(83)) {
            this.speed.y = 5;
        } else if (keyIsDown(87)) {
            this.speed.y = -5;
        } else {
            this.speed.y = 0;
        } 
    }
    
 
}
