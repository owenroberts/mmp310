//lionwins scene
class lionwins extends Scene {

    preload() {
        
        this.nextSound = loadSound('sounds/ekaterina/next.mp3');
        this.nextSound.setVolume(1.0);
        this.lionwins = loadImage('images/ekaterina/lionwins.png');
        this.next = loadImage('images/ekaterina/next.gif');
        this.confetti = loadImage('images/ekaterina/confetti.gif');
        var lion = loadSpriteSheet('images/ekaterina/lion.png', 520, 467, 22);
        this.lion = new NPC(580, 420, lion);
        this.remix;
    }

    setup() {

        this.nextScene = false;        
        this.lion.setup();
    }

    draw() {
        
        camera.off();
        
        image(this.lionwins, 0, 0);
        image(this.next, 180, 650);
        image(this.confetti, -100, 0);
        this.lion.display();
        
        camera.on();
        
        if (keyIsDown(32)) {
            location.reload(); 
            changeScene('collosseum');
            this.nextSound.play();
        } 
    }
}
