//mousewins scene
class mousewins extends Scene {

    preload() {
        
        this.mousewins = loadImage('images/ekaterina/mousewins.png');
        this.next = loadImage('images/ekaterina/next.gif');
        this.confetti = loadImage('images/ekaterina/confetti.gif');
        var mouse = loadSpriteSheet('images/ekaterina/mouse.png', 700, 324, 11);
        this.mouse = new NPC(500, 400, mouse);
        this.nextSound = loadSound('sounds/ekaterina/next.mp3');
        this.nextSound.setVolume(1.0);
    }

    setup() {
        
        this.mouse.setup();
        this.nextScene = false;        
    }

    draw() {
        
        camera.off();
        
        image(this.mousewins, 0, 0);
        image(this.next, 180, 650);
        image(this.confetti, -100, 0);
        
        this.mouse.display();
        
        camera.on();

        if (keyIsDown(32)) {
            location.reload(); 
            changeScene('collosseum');
            this.nextSound.play();
        } 
    }
}
