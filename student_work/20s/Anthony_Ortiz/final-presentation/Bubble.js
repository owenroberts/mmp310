class Bubble extends Thing {
    constructor(x, y, img) {
        super(x, y, img);
        this.ySpeed = random (bubbleMinSpeed, bubbleMaxSpeed);
    }
    update() {
        this.y -= this.ySpeed;
        
        if(this.y < 20) {
            this.y = 350;
        }
    }
}