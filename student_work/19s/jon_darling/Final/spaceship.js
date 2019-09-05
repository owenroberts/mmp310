/*
	spaceship class
*/

class Spaceship extends Entity {
    constructor(x, y, size) {
        super(width / 2, height / 1.3);

    }

    display() {

        fill(85);
        noStroke();
        ellipse(this.x - this.size / 3 + random(-1, 1), this.y + this.size / 2, this.size / 4, this.size); //leftGun
        ellipse(this.x + this.size / 3 + random(-1, 1), this.y + this.size / 2, this.size / 4, this.size); //rightGun

        fill('orange');
        ellipse(this.x - this.size / 3, this.y + this.size / 2, 4, this.size); //leftGun-ORANGE
        ellipse(this.x + this.size / 3, this.y + this.size / 2, 4, this.size); //rightGun - ORANGE


        fill(90);
        triangle(
            this.x, this.y,
            this.x - this.size, this.y + this.size / 1.5,
            this.x + this.size, this.y + this.size / 1.5);

        /*---------------------------
        FLAMES
        -------------------------------*/
        fill('#fff');
        ellipse(this.x + random(-5, 5), this.y + this.size + random(-5, 5), this.size / 3, this.size / 1.4); //flameWhite
        fill('#FFFF00');
        ellipse(this.x + random(-1, 1), this.y + this.size + random(-1, 3), this.size / 1.5, this.size / 3); //flameInnerYellow
        fill('red');
        ellipse(this.x + random(-2, 2), this.y + this.size + random(-6, 8), this.size / 3, this.size / 2); //flameInnerRed
        fill('orange');
        ellipse(this.x + random(-2, 2), this.y + this.size + random(-1, 2), this.size / 3, this.size / 2); //flameInnerOrange
        fill('brown');
        ellipse(this.x + random(-2, 2), this.y + this.size + random(-1, 1), this.size / 5, this.size / 2); //flameInnerBrown

            
        // MAIN BODY
        fill('#888')
        noStroke();
        triangle(
            this.x, this.y,
            this.x - this.size, this.y + this.size,
            this.x + this.size, this.y + this.size);

             /*---------------------------
        COCKPIT
        -------------------------------*/
        noFill();
        stroke(0);
        ellipse(this.x, this.y + this.size - this.size / 2, this.size / 3, this.size / 2); //flameInnerRed
        fill('black');
        ellipse(this.x, this.y + this.size / 1.5, this.size / 8); //flameInnerOrange
        fill('white');
        line(this.x - this.size / 6.4, this.y +this.size / 2.3, this.x + this.size / 6.4, this.y + this.size / 2.3); //flameInnerOrange
        


        //Spaceship stops when keys are released
        this.checkEdges = function () {
            if (this.x < this.size) this.x = this.size;
            else if (this.x > width - this.size) this.x = width - this.size;
        }

        this.checkEdges = function () {
            if (this.y < this.size) this.y = this.size;
            else if (this.y > height - this.size) this.y = height - this.size;
        }
    }

    //Spaceship stays within the screen
    update() {
        super.update();
        if (this.x > width - this.size) {
            this.x = width - this.size;
        }
        if (this.x < 0 + this.size) {
            this.x = 0 + this.size;
        }
    }





    controls() {
        if (keyIsDown(RIGHT_ARROW)) {
            this.speed.x = 8;
        } else if (keyIsDown(LEFT_ARROW)) {
            this.speed.x = -8;
        } else if (keyIsDown(UP_ARROW)) {
            this.speed.y = -5;
        } else if (keyIsDown(DOWN_ARROW)) {
            this.speed.y = 5;
        }
        // else {
        //     this.speed.x = 0;
        //     this.speed.y = 0;
        // }
    }
    setSpeed(speed) {
        this.speed.x = speed;
    }


}