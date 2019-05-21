/*
	asteroid class
*/

class Asteroid extends Entity {

    constructor() {
        super(random(width), -100);
        this.speed.x = random(-1, 2);
        this.speed.y = random(5);
        this.size = random(50, 120);



        this.image = random(astImgs);
    }

    display() {
        image(this.image, this.x, this.y, this.size, this.size);
    }

    update() {
        super.update();

        //remove asteroids below the screen
        if (this.y > height + this.size) {
            this.died = true;
        }

        //bounce asteroids off the sides of the screen
        if (this.x <= 0 || this.x >= width) {
            this.speed.x *= -1;
        }

    }
}
