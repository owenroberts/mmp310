/* 
    Person class
*/

class Person {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.alive = true;
    }
    update(x, y) {
        this.x = x;
        this.y = y;
        this.display();
    }
    display() {
        if (this.alive) {
            this.drawBody(this.x, this.y, 100, this.color);
        }
    }
    drawBody(x, y, width, color) {
        this.drawHead(x, y, width, color);
        this.drawLegs(x, y + 50);
    }
    drawHead(x, y, width, color) {
        // left eye
        var leftEye = x - 20;
        // right eye
        var rightEye = x + 20;

        fill(color);
        ellipse(x, y, width); // head
        stroke(10);
        fill("black");
        ellipse(leftEye, y, 10); // left eye
        ellipse(rightEye, y, 10); // right eye
    }
    drawLegs(x, y) {
        fill("black");
        stroke(10);
        // Body
        line(x, y, x, y + 250);

        // Left Arm
        line(x - 100, y + 100, x, y + 50);

        // Right Arm
        line(x + 100, y + 100, x, y + 50);

        // Left leg
        line(x, y + 250, x + 100, y + 390);

        // Left leg
        line(x, y + 250, x - 100, y + 390);
    }
    collide(other) {
        var d = dist(this.x, this.y, other.x, other.y);
        var size;
        if (this.size > other.size) {
            size = this.size;
        } else {
            size = other.size;
        }
        if (d < size / 2) {
            return true;
        } else {
            return false;
        }
    }
    remove(list) {
        var index = list.indexOf(this);
        console.log(list, index);
        list.splice(index, 1);
    }
}
